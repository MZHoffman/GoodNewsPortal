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
export const upvoteArticle = (id) => {
  return axios
    .patch(`${urlBase}articles/${id}`, { inc_votes: 1 })
    .catch((err) => console.log(err));
};
export const downvoteArticle = (id) => {
  return axios
    .patch(`${urlBase}articles/${id}`, { inc_votes: -1 })
    .catch((err) => console.log(err));
};
export const postComment = (id, body, username) => {
  return axios
    .post(`${urlBase}articles/${id}/comments`, {
      body: body,
      username: username,
    })
    .catch((err) => console.log(err));
};
