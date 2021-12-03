import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import middlewares from './middlewares';
import { AlertState, SessionState, UIState } from './interfaces';

export type State = {
  session: SessionState;
  alert: AlertState;
  ui: UIState;
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
