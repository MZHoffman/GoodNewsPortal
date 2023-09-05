import axios from 'axios';

const urlBase = 'https://news-site-backend-project.onrender.com/api/';
export const getArticles = () => {
  return axios.get(`${urlBase}articles`).catch((err) => console.log(err));
};

export const getArticle = (id) => {
  return axios.get(`${urlBase}articles/${id}`).catch((err) => console.log(err));
};
export const getComments = (id) => {
  return axios
    .get(`${urlBase}articles/${id}/comments`)
    .catch((err) => console.log(err));
};
