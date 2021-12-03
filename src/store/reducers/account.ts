import { AnyAction } from 'redux';
import { SessionState } from '../interfaces';

const initialState: SessionState = {
  user: null,
  token: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
