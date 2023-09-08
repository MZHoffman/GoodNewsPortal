import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';

import { getArticles } from '../__utils__/api';

import ArticleCard from './ArticleCard';
import DataController from './DataController';
import TopicError from './TopicError';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [params, setParams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles(params)
      .then(({ data }) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [params]);

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataController params={params} setParams={setParams} />
        </Grid>
        <Grid item xs={12}>
          {loading && <CircularProgress />}
          {error && <TopicError />}
          <Grid container spacing={2}>
            {articles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default Articles;
