import https from "../Api/https";

export const toggleNotification = async (action: {action: boolean}) => {
  const { data } = await https.post('/notification/disable_or_on_all/', action);
  return data;
}