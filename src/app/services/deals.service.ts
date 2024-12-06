import https from "../Api/https"



export const createDeal = async (deal_params: {user_for: string, sum: number}) => {
  try {
    const res = await https.post('/transaction/create', deal_params);
    return res.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Ошибка сети");
    }
  }
}


export const canceledDeal = async (transaction_id: {transaction_id: string}) => {
  try {
    const res = await https.post('/transaction/canceled', transaction_id);
    return res.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Ошибка сети");
    }
  }
}

export const acceptDeal = async (transaction_id: {transaction_id: string}) => {
  try {
    const res = await https.post('/transaction/accept', transaction_id);
    return res.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Ошибка сети");
    }
  }
}

export const completionDeal = async (transaction_id: {transaction_id: string}) => {
  try {
    const res = await https.post('/transaction/conditions_are_met', transaction_id);
    return res.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error("Ошибка сети");
    }
  }
}