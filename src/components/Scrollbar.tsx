import * as React from "react";
import { IProps } from "../index";

const Scrollbar = (props: IProps) =>
    <div style={{ overflowY: "scroll", border: "1px solid black", height: "900px" }}>
        {props.children}
    </div>;

export default Scrollbar;