import React from 'react';

import { Grid, Paper } from '@mui/material';
import { CalendarMonth, ThumbsUpDown, Face } from '@mui/icons-material';

const CommentCard = ({ comment }) => {
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
      </Grid>
    </Paper>
  );
};

export default CommentCard;
