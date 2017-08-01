const express = require('express');
const config = require('../config');
const userController = require('./controllers/user');
const postController = require('./controllers/posts');
const commentController = require('./controllers/comments');
const replyController = require('./controllers/replies');

const app = express();

app.get('/api/posts', postController.getPosts);

app.get('/api/post/:post_id', postController.getPostById);

app.post('/api/posts', postController.createPost);

app.get('/api/posts/:post_id/comments', commentController.getComments);

app.post('/api/posts/:post_id/comments', commentController.createComment);

app.get('/api/comments/:comment_id/replies', replyController.getReplies);

app.post('/api/comments/:comment_id/replies', replyController.createReply);

app.post('/api/signup', userController.signUpUser);

app.post('/api/login', userController.loginUser);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`); // eslint-disable-line no-console
});