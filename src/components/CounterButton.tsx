import * as React from "react";
import { IProps, IState } from "../index";

interface ICounterButtonProps extends IProps {
  color: string;
}

interface ICounterButtonState extends IState {
  count: number;
}

class CounterButton extends React.Component<
  ICounterButtonProps,
  ICounterButtonState
> {
  constructor(props: ICounterButtonProps) {
    super(props);
    this.state = { count: 0 };
  }

  public render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }

  private updateCount = () =>
    this.setState((state) => ({ count: state.count + 1 }));
}

export default CounterButton;
