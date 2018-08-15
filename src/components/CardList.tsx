import * as React from "react";
import Card from "./Card";
import { IRobot, IProps } from "../index";

interface ICardListProps extends IProps {
    robots: IRobot[];
}

const renderRobot = (robot: IRobot) => <Card key={robot.id} robot={robot} />

const CardList = ({ robots }: ICardListProps) =>
    <div>
        {robots.map(renderRobot)}
    </div>;

export default CardList;