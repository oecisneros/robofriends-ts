import * as React from "react";
import { IProps, IState } from "../index";

interface IErrorBoundaryState extends IState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IErrorBoundaryState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    public componentDidCatch() {
        this.setState({ hasError: true });
    }

    public render() {
        return (this.state.hasError) ? <h1>Ooooops</h1> : this.props.children;
    }
}

export default ErrorBoundary;