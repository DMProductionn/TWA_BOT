import https from "../Api/https"

export const getToken = async (username: {username: string}) => {
  const { data } = await https.post('/auth/create/token/', username);
  return data
}