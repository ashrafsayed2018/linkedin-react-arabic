import * as actions from "../actions/actionTypes";

const intialState = {
  user: null,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default userReducer;
