import * as ReactDOM from "react-dom";
import * as Reducers from "./reducers";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import "tachyons";

export interface IRobot {
  id: number;
  name: string;
  email: string;
}

export type IProps = Readonly<{
  children?: JSX.Element;
}>;

export type IState = Readonly<object>;

const store = createStore(
  combineReducers({
    searchRobots: Reducers.searchRobots,
    requestRobots: Reducers.requestRobots,
  }),
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
