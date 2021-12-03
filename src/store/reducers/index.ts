import { combineReducers } from 'redux';
import account from './account';
import alert from './alert';
import ui from './ui';

export default combineReducers({
  session: account,
  alert,
  ui
});
