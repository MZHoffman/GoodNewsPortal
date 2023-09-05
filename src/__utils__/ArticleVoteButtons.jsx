import React, { useEffect, useState } from 'react';

import { upvoteArticle, downvoteArticle } from './api';
import { ButtonGroup, IconButton } from '@mui/material';

import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ArticleVoteButtons = ({ article_id, votes }) => {
  console.log('🚀 ~ ArticleVoteButtons ~ votes:', votes);
  const [localVotes, setLocalVotes] = useState(votes);

  const handleUpvote = () => {
    upvoteArticle(article_id);
    const newVotes = localVotes + 1;
    setLocalVotes(newVotes);
  };
  const handleDownvote = () => {
    downvoteArticle(article_id);
    const newVotes = localVotes - 1;
    setLocalVotes(newVotes);
  };
  return (
    <ButtonGroup>
      <IconButton onClick={handleUpvote}>
        <FavoriteIcon />
      </IconButton>
      {localVotes}
      <IconButton onClick={handleDownvote}>
        <HeartBrokenIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default ArticleVoteButtons;
