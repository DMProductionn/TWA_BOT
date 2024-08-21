import https from "../Api/https"



export const createDeal = async (deal_params: {user_for: string, sum: number}) => {
  try {
    const res = await https.post('/transaction/create', deal_params);
    console.log(res.data);
    return res.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Ошибка сети");
    }
  }
}