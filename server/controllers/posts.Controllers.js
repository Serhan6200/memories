import postModel from "../models/post.Model.js";

export const getPosts = async (req, res) => {
  try {
    const data = await postModel.find();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const data = req.body;
  const newData = new postModel(data);
  try {
    await newData.save();
    return res.status(201).json({ message: "Success", data: newData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
