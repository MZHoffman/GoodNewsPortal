import React, { useEffect, useState } from 'react';

import { getComments } from '../__utils__/api';

import { Card, CardHeader } from '@mui/material';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

const Comments = ({ article_id, user }) => {
  const [comments, setComments] = useState([]);
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
            removeCommentHandler={removeCommentHandler}
          />
        ))}
      </Card>
    </section>
  );
};

export default Comments;
