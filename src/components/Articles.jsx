import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import ArticleCard from './ArticleCard';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  console.log('🚀 ~ Articles ~ articles:', articles);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get('https://news-site-backend-project.onrender.com/api/articles')
      .then(({ data }) => {
        setArticles(data.articles);
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
