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
  Divider,
  CircularProgress,
} from '@mui/material';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import FaceIcon from '@mui/icons-material/Face';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Comments from './Comments';
import ArticleVoteButtons from '../__utils__/ArticleVoteButtons';
import ArticleError from './ArticleError';

const Article = ({ user }) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticle(article_id)
      .then(({ data }) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);
  if (loading) return <CircularProgress />;
  if (error) return <ArticleError />;
  return (
    <>
      <Card>
        <CardMedia
          component='img'
          image={article.article_img_url}
          alt={article.title}
        />
        <CardHeader
          title={article.title}
          subheader={new Date(article.created_at).toLocaleDateString()}
        />
        <CardContent>
          <Typography>{article.body}</Typography>
          <Divider sx={{ margin: 3 }} />
          <Grid
            container
            spacing={2}
            sx={{ alignItems: 'center', dispaly: 'flex' }}
          >
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <FaceIcon />
                </Grid>
                <Grid item>
                  <Typography>{article.author}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <CommentOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography>{article.comments_count}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <ClassOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography>{article.topic}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ArticleVoteButtons
                article_id={article.article_id}
                votes={article.votes}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Divider sx={{ margin: 3 }} />
      <Comments article_id={article_id} user={user} />
    </>
  );
};

export default Article;
