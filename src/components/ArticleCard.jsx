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
    <Grid item xs={12} md={6} key={article.id}>
      <Card>
        <CardActionArea>
          <Link to={`/articles/${article.article_id}`}>
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
                    <FavoriteBorderIcon />
                    {article.votes}
                  </Typography>
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
