import https from "../Api/https"


export const getPaymentHistory = async () => {
  const res = await https.get('/payment/history');
  console.log(res.data);
  return res.data
}