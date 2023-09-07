import React, { useEffect, useState } from 'react';

import { getTopics } from '../__utils__/api';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DataController = ({ params, setParams }) => {
  const [topics, setTopics] = useState(['All']);
  const [topic, setTopic] = useState('All');
  useEffect(() => {
    getTopics().then(({ data }) => {
      const topicNames = data.topics.map((topicObj) => topicObj.slug);
      setTopics(['All', ...topicNames]);
    });
  }, []);
  useEffect(() => {
    const newParams = new URLSearchParams([]);
    topic !== 'All'
      ? newParams.append('topic', topic)
      : newParams.delete('topic');
    setParams(newParams);
  }, [topic]);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel id='topics'>Topic</InputLabel>
        <Select
          labelId='topics'
          id='demo-simple-select'
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
    </form>
  );
};

export default DataController;
