import https from "../Api/https"


export const addToken = async (chat_id: {chat_id: number}) => {
  const res = await https.post('/auth/create/token', chat_id);
  localStorage.setItem('token', res.data.token);
  return res.data.token;
}
