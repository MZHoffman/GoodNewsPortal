import React, { useEffect, useState } from 'react';

import { upvoteArticle, downvoteArticle } from './api';
import { ButtonGroup, IconButton, Grid, Typography } from '@mui/material';

import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ArticleVoteButtons = ({ article_id, votes }) => {
  const [localVotes, setLocalVotes] = useState(votes);

  const handleUpvote = () => {
    upvoteArticle(article_id).then((res) => {
      if (typeof res !== 'number') setLocalVotes((currVotes) => currVotes - 1);
    });
    setLocalVotes((currVotes) => currVotes + 1);
  };
  const handleDownvote = () => {
    downvoteArticle(article_id).then((res) => {
      if (typeof res !== 'number') setLocalVotes((currVotes) => currVotes + 1);
    });
    setLocalVotes((currVotes) => currVotes - 1);
  };
  return (
    <ButtonGroup>
      <Grid
        container
        spacing={0}
        sx={{ alignItems: 'center', dispaly: 'flex' }}
      >
        <Grid item>
          <IconButton onClick={handleUpvote}>
            <FavoriteIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography>{localVotes}</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={handleDownvote}>
            <HeartBrokenIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ButtonGroup>
  );
};

export default ArticleVoteButtons;
