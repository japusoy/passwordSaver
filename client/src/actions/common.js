import {
  SIDEBAR_COLLAPSE,
} from "../constants/actionTypes";

export const sidebarMini = (flag) => async (dispatch) => {
  try {
    dispatch({ type: SIDEBAR_COLLAPSE, payload: flag });
  } catch (error) {
    console.log(error);
  }
};
