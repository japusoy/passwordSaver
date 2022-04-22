import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getAccounts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAccounts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createAccount = (account) => async (dispatch) => { //console.log(JSON.stringify(account));
  try {
    const { data } = await api.createAccount(account);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
