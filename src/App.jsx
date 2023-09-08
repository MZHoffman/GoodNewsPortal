import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import Header from './components/Header';
import Menu from './components/Menu';
import Articles from './components/Articles';
import Article from './components/Article';
import PathError from './components/PathError';

import './App.css';

function App() {
  const [user, setUser] = useState('cooljmessy');
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path='/' element={<Articles />} />
            <Route
              path='/articles/:article_id'
              element={<Article user={user} />}
            />
            <Route path='*' element={<PathError />} />
          </Routes>
        </Grid>
        <Grid item xs={12}>
          <Menu />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
