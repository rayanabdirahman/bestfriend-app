import { AnyAction } from 'redux';
import { UIState } from '../interfaces';
import { UIActionType } from '../types';

const initialState: UIState = {
  isLoading: false,
  action: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UIActionType.SET_LOADING_ON:
    case UIActionType.SET_LOADING_OFF: {
      return { ...state, isLoading: action.payload, action: action.status };
    }
    default: {
      return state;
    }
  }
};
