import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Reducers from "./reducers";
import App from './containers/App';
// //import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import "tachyons";

export interface IRobot {
  id: number,
  name: string,
  email: string
}

export interface IProps extends Readonly<{}> {
  children?: JSX.Element
}

export interface IState extends Readonly<{}> {
}

const store = createStore(combineReducers({
  searchRobots: Reducers.searchRobots,
  requestRobots: Reducers.requestRobots
}), applyMiddleware(thunkMiddleware)); // , createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();