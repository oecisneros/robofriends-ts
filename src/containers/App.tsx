/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import * as Actions from "../actions";
import { IProps } from "../index";

const mapStateToProps = (state: any) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSearchChange: ({ target }: any) =>
    dispatch(Actions.setSearchField(target.value)),
  onRequestRobots: () => (dispatch as any)(Actions.requestRobots),
});

class App extends React.Component<IProps> {
  public render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
