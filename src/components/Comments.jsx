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

  return (
    <section>
      <Card>
        <CardHeader title='comments:' />
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </Card>
      <CommentForm article_id={article_id} user={user} />
    </section>
  );
};

export default Comments;
