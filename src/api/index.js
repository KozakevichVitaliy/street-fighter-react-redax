import R from 'ramda'
import { callApi } from './apiHelper'

export const fetchFighters = async () => {
  try {
    const endpoint = '5d9309a730000067001b719b';
    const apiResult = await callApi(endpoint, 'GET');
    return apiResult.content;
  } catch (error) {
    throw error;
  }
}

export const fetchFighterByIdApi = async id => {
  try {
    const endpoint = '5dac35a230000081002986b0';
    const apiResult = await callApi(endpoint, 'GET');
    return R.find(R.propEq('_id', id), apiResult.content);
  } catch (error) {
    throw error;
  }
}