import React, { useEffect, useState } from 'react';

import { getComments } from '../__utils__/api';

import { Card, CardHeader, Snackbar, Alert } from '@mui/material';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

const Comments = ({ article_id, user }) => {
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getComments(article_id).then(({ data }) => setComments(data.comments));
  }, []);

  const updateComments = (comment) => {
    const newComments = [comment, ...comments];
    setComments(newComments);
  };
  const removeCommentHandler = (comment_id) => {
    const newComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    setComments(newComments);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  return (
    <section>
      <CommentForm
        article_id={article_id}
        user={user}
        updateComments={updateComments}
      />
      <Card>
        <CardHeader title='comments:' />
        {comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            user={user}
            setOpen={setOpen}
            removeCommentHandler={removeCommentHandler}
          />
        ))}
      </Card>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Comment Deleted!
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Comments;
