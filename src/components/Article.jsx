import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getArticle } from '../__utils__/api';
import {
  Grid,
  Card,
  Typography,
  CardHeader,
  CardContent,
  CardMedia,
  CardActionArea,
  CircularProgress,
} from '@mui/material';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import FaceIcon from '@mui/icons-material/Face';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Comments from './Comments';
import ArticleVoteButtons from '../__utils__/ArticleVoteButtons';

const Article = ({ user }) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticle(article_id).then(({ data }) => {
      setArticle(data.article);
      setLoading(false);
    });
  }, []);
  if (loading) return <CircularProgress />;
  return (
    <>
      <Card>
        <CardMedia
          component='img'
          height='194'
          image={article.article_img_url}
          alt={article.title}
        />
        <CardHeader
          title={article.title}
          subheader={Date(article.created_at)}
        />

        <CardContent>
          <Typography>{article.body}</Typography>
          <Grid
            container
            spacing={2}
            sx={{ alignItems: 'center', dispaly: 'flex' }}
          >
            <Grid item>
              <Typography>
                <FaceIcon />
              </Typography>
            </Grid>
            <Grid item>
              <Typography>{article.author}</Typography>
            </Grid>

            <Grid item>
              <Typography>
                <CommentOutlinedIcon />
                {article.comments_count}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <ClassOutlinedIcon />
                {article.topic}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <ArticleVoteButtons
                  article_id={article.article_id}
                  votes={article.votes}
                />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Comments article_id={article_id} user={user} />
    </>
  );
};

export default Article;
