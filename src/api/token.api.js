import axios from 'axios';

const params = new URLSearchParams();
params.append('grant_type', 'client_credentials');
const requestToken = () => axios.post(process.env.VUE_APP_TOKEN_URL,
  params,
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: process.env.VUE_APP_TOKEN_REQUEST,
    },
  }).then((res) => {
  const token = res.data.access_token;
  localStorage.setItem('token', token);
}).catch((error) => {
  console.error(error);
});

export {
  requestToken,
};
