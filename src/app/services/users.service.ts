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

export const getUserSearch = async (search: string | null) => {
  const res = await https.get(`/auth/search/${search}`);
  console.log(res.data);
  return res.data;
};

