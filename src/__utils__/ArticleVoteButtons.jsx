import React, { useEffect, useState } from 'react';

import { upvoteArticle, downvoteArticle } from './api';
import { ButtonGroup, IconButton } from '@mui/material';

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
