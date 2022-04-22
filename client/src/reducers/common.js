import * as actionType from "../constants/actionTypes";

const commonReducer = (state = { collapse: true }, action) => {
  switch (action.type) {
    case actionType.SIDEBAR_COLLAPSE:
      return { ...state, collapse: !action.payload };
    default:
      return state;
  }
};

export default commonReducer;
