import https from "../Api/https";

export const getTransactions = async () => {
  const res = await https.get('/transaction/list_with_status');
  console.log(res.data);
  return res.data;
};


export const getTransactionsWithStatus = async (statuses: string) => {
  const res = await https.get(`/transaction/list_with_status?statuses=${statuses}`);
  console.log(res.data);
  return res.data;
};


