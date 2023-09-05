import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';

import Header from './components/Header';
import Menu from './components/Menu';
import Articles from './components/Articles';
import Article from './components/Article';

import './App.css';

function App() {
  const [user, setUser] = useState('');
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Articles />} />
        <Route path='/articles/:article_id' element={<Article />} />
      </Routes>
      <Menu />
    </>
  );
}

export default App;
