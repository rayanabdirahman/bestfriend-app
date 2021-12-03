import thunk from 'redux-thunk';
import logger from 'redux-logger';
import onErrorApi from './error';
import onLoading from './loading';

const middlewares = [thunk, logger, onLoading, onErrorApi];

export default middlewares;
