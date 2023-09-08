import React, { useState } from 'react';

import { Grid, Paper, Snackbar, Alert } from '@mui/material';
import { CalendarMonth, ThumbsUpDown, Face, Delete } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

import { deleteComment } from '../__utils__/api';
const CommentCard = ({ comment, user, removeCommentHandler, setOpen }) => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = () => {
    setDeleting(true);
    deleteComment(comment.comment_id).then(({ status }) => {
      setDeleting(false);
      setOpen(true);
      if (status === 204) removeCommentHandler(comment.comment_id);
    });
  };
  const deleteButton = (
    <Grid item xs={12}>
      <LoadingButton
        variant='outlined'
        startIcon={<Delete />}
        loading={deleting}
        loadingPosition='start'
        onClick={handleDelete}
      >
        Delete
      </LoadingButton>
    </Grid>
  );

  return (
    <Paper style={{ padding: '40px 20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Face /> {comment.author}
        </Grid>
        <Grid item xs={12}>
          {comment.body}
        </Grid>
        <Grid item xs={12}>
          <ThumbsUpDown /> {comment.votes}
        </Grid>
        <Grid item xs={12}>
          <CalendarMonth />
          {comment.created_at}
        </Grid>
        {comment.author === user ? deleteButton : ''}
      </Grid>
    </Paper>
  );
};

export default CommentCard;
