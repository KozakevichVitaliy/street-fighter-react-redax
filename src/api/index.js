import { callApi } from './apiHelper'

export const fetchFighters = async () => {
  try {
    const endpoint = '5d9309a730000067001b719b';
    const apiResult = await callApi(endpoint, 'GET');
    console.log(apiResult)
    return apiResult.content;
  } catch (error) {
    throw error;
  }
}