const Post = require('../models/Post');

exports.index = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    res.json('Bad request').status(400);
  }
};

exports.show = async ({ params: { id } }, res) => {
  try {
    const post = await Post.findById(id);
    if (!post) return res.json('Not found').status(404);
    return res.send(post);
  } catch (error) {
    return res.json('Bad request').status(400);
  }
};

exports.create = async ({ body }, res) => {
  try {
    const post = await Post.create(body);
    res.send(post);
  } catch (error) {
    res.json('Bad request').status(4000);
  }
};

exports.destroy = async ({ params: { id } }, res) => {
  //Vos instructions
  res.send({ message: 'ok' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  //Vos instructions
  res.send({ message: 'ok' });
};
