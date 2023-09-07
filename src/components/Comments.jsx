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
    const newComments = [
      {
        comment_id: `tempID${Math.floor(Math.random() * 100001)}`,
        body: comment,
        article_id: article_id,
        author: user,
        votes: 0,
        created_at: new Date().toISOString(),
      },
      ...comments,
    ];
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
          <CommentCard key={comment.comment_id} comment={comment} user={user} />
        ))}
      </Card>
    </section>
  );
};

export default Comments;
