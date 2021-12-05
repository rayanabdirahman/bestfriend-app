import { AnyAction } from 'redux';
import { SessionState } from '../interfaces';
import { AccountActionType } from '../types';

const initialState: SessionState = {
  user: null,
  token: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case AccountActionType.SIGN_IN_SUCCESS: {
      const { token, user } = action.payload;
      return { ...state, token, user };
    }
    case AccountActionType.SET_CURRENT_USER_SUCCESS:
    case AccountActionType.SET_CURRENT_USER_FAIL: {
      const { token, user } = action.payload;
      return { ...state, token, user };
    }
    case AccountActionType.SIGN_IN_FAIL:
    case AccountActionType.SIGN_OUT_SUCCESS: {
      return { ...state, user: null, token: null };
    }
    default: {
      return state;
    }
  }
};
