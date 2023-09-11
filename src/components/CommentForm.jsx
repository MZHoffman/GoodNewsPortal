import React, { useState } from 'react';

import { postComment } from '../__utils__/api';
import { TextField, Snackbar, Alert, Paper } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import SendIcon from '@mui/icons-material/Send';

const CommentForm = ({ user, article_id, updateComments }) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const [posting, setPosting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.length < 1) return setError(true);
    setPosting(true);
    postComment(article_id, comment, user).then(({ data }) => {
      updateComments(data.comment);
      setPosting(false);
      setComment('');
      setOpen(true);
    });
  };
  const handleChange = (e) => {
    setComment(e.target.value);
    setError(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper elevetion={3}>
      <form onSubmit={handleSubmit} style={{ padding: 34, margin: 40 }}>
        <TextField
          margin='normal'
          id='comment-field'
          label='Comment'
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={handleChange}
          error={error}
          disabled={posting}
          helperText={error ? 'Comment must not be empty!' : ''}
        />
        <LoadingButton
          type='submit'
          endIcon={<SendIcon />}
          loading={posting}
          loadingPosition='end'
          variant='contained'
        >
          Post
        </LoadingButton>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            Comment Posted!
          </Alert>
        </Snackbar>
      </form>
    </Paper>
  );
};

export default CommentForm;
