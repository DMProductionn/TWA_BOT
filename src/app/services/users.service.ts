import https from '../Api/https';

export const getUsersAll = async () => {
  const res = await https.get('/auth/all');
  console.log(res.data);
  return res.data;
};

export const getUsersMe = async () => {
  const res = await https.get('/auth/me');
  console.log(res.data);
  return res.data;
};
