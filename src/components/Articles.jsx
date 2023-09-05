import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { getArticles } from '../__utils__/api';

import ArticleCard from './ArticleCard';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  console.log('🚀 ~ Articles ~ articles:', articles);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    getArticles().then(({ data }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <main>
      <Grid container spacing={2}>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </Grid>
    </main>
  );
};

export default Articles;
