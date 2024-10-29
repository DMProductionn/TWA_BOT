import https from "../Api/https";

export const getTransactions = async () => {
  const res = await https.get('/transaction/list_with_status');
  return res.data;
};



