/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scrollbar from "../components/Scrollbar";
import { IRobot, IProps } from "../index";

interface IMainPageProps extends IProps {
  onRequestRobots?: any;
  onSearchChange?: any;
  searchField?: string;
  robots?: IRobot[];
}

class MainPage extends React.Component<IMainPageProps> {
  public componentDidMount() {
    this.props.onRequestRobots();
  }

  public render() {
    const filteredRobots = (this.props.robots || []).filter((x) =>
      x.name.includes(this.props.searchField || "")
    );
    return (
      <div className="tc">
        <Header />
        <SearchBox onChange={this.props.onSearchChange} />
        <Scrollbar>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scrollbar>
      </div>
    );
  }
}

export default MainPage;
