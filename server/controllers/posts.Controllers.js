import postModel from "../models/post.Model.js";

export const getPosts = async (req, res) => {
  try {
    const data = await postModel.find();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = () => {
  res.status(200).json({ message: "Create a new post route" });
};
