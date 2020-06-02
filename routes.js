const express = require('express');
const PostsController = require('./controllers/posts.controller');
const authMiddleware = require('./middlewares/auth.middleware');

const postsRouter = express.Router();


postsRouter
  .get('/', PostsController.index)
  .get('/:id', PostsController.show)
  .post('/', [authMiddleware], PostsController.create)
  .put('/:id', [authMiddleware], PostsController.update)
  .delete('/:id', [authMiddleware], PostsController.destroy);

exports.postsRouter=postsRouter;  
