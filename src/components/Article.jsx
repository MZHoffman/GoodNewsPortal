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
} from '@mui/material';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import FaceIcon from '@mui/icons-material/Face';

import Comments from './Comments';

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then(({ data }) => setArticle(data.article));
  }, []);

  return (
    <>
      <Card>
        <CardActionArea>
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
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      <Comments article_id={article_id} />
    </>
  );
};

export default Article;
