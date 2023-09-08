import React from 'react';

import { Link } from 'react-router-dom';
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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ArticleCard = ({ article }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={article.id}>
      <Card>
        <CardActionArea>
          <Link to={`/articles/${article.article_id}`}>
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
                  <Grid container spacing={1}>
                    <Grid item>
                      <FavoriteBorderIcon />
                    </Grid>
                    <Grid item>
                      <Typography>{article.votes}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
