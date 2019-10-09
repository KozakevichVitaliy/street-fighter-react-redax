import R from 'ramda'
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

export const fetchFighterByIdApi = async id => {
  try {
    const endpoint = '5d9309a730000067001b719b';
    const apiResult = await callApi(endpoint, 'GET');
    console.log(apiResult.content)
    return R.find(R.propEq('_id', id), apiResult.content);
  } catch (error) {
    throw error;
  }
}