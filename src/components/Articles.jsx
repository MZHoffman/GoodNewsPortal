import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { getArticles } from '../__utils__/api';

import ArticleCard from './ArticleCard';
import DataController from './DataController';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [params, setParams] = useState([]);
  console.log('🚀 ~ Articles ~ params:', { params });

  useEffect(() => {
    getArticles(params).then(({ data }) => {
      setArticles(data.articles);
    });
  }, [params]);

  return (
    <main>
      <DataController params={params} setParams={setParams} />
      <Grid container spacing={2}>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </Grid>
    </main>
  );
};

export default Articles;
