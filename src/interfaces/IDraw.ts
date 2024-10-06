import { Card } from "../cards/Card";

export interface IDraw {
    draw(): Card | null;
}