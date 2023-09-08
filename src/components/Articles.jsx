import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';

import { getArticles } from '../__utils__/api';

import ArticleCard from './ArticleCard';
import DataController from './DataController';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [params, setParams] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('🚀 ~ Articles ~ loading:', loading);

  useEffect(() => {
    setLoading(true);
    getArticles(params).then(({ data }) => {
      setArticles(data.articles);
      setLoading(false);
    });
  }, [params]);

  return (
    <main>
      <DataController params={params} setParams={setParams} />
      {loading && <CircularProgress />}
      <Grid container spacing={2}>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </Grid>
    </main>
  );
};

export default Articles;
