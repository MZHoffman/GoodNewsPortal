import axios from 'axios';

export const getArticles = () => {
  return axios
    .get('https://news-site-backend-project.onrender.com/api/articles')

    .catch((err) => console.log(err));
};

export const getArticle = (id) => {
  return axios
    .get(`https://news-site-backend-project.onrender.com/api/articles/${id}`)

    .catch((err) => console.log(err));
};
