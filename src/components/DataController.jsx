import React, { useEffect, useState } from 'react';

import { getTopics } from '../__utils__/api';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

const DataController = ({ params, setParams }) => {
  const [topics, setTopics] = useState(['All']);
  const [topic, setTopic] = useState('All');
  const [sort, setSort] = useState('created_at');
  const [order, setOrder] = useState('DESC');
  useEffect(() => {
    getTopics().then(({ data }) => {
      const topicNames = data.topics.map((topicObj) => topicObj.slug);
      setTopics(['boom', 'All', ...topicNames]);
      //adding "boom" for testing topic error. Styling will wil come after
    });
  }, []);
  useEffect(() => {
    const newParams = new URLSearchParams([]);
    topic !== 'All'
      ? newParams.append('topic', topic)
      : newParams.delete('topic');
    sort !== 'created_at'
      ? newParams.append('sort_by', sort)
      : newParams.delete('sort_by');
    order !== 'DESC'
      ? newParams.append('order', order)
      : newParams.delete('order');
    setParams(newParams);
  }, [topic, sort, order]);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item md={4} sm={4} xs={12}>
          <FormControl fullWidth>
            <InputLabel id='topics'>Topic</InputLabel>
            <Select
              labelId='topics'
              id='topics_select'
              value={topic}
              label='Topic'
              onChange={handleTopicChange}
            >
              {topics.map((topicName) => (
                <MenuItem key={topicName} value={topicName}>
                  {topicName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <FormControl fullWidth>
            <InputLabel id='sort'>Sort</InputLabel>
            <Select
              labelId='sort'
              id='sort_select'
              value={sort}
              label='Sort'
              onChange={handleSortChange}
            >
              <MenuItem value='created_at'>Publication Time</MenuItem>
              <MenuItem value='comments_count'>Comments</MenuItem>
              <MenuItem value='votes'>Votes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <FormControl fullWidth>
            <InputLabel id='order'>Order By</InputLabel>
            <Select
              labelId='order'
              id='order_select'
              value={order}
              label='Order'
              onChange={handleOrderChange}
            >
              <MenuItem value='DESC'>Descending</MenuItem>
              <MenuItem value='ASC'>Ascending</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default DataController;
