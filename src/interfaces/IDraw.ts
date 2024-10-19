import { Card } from "../Card";

export interface IDraw {
    drawCard(): Card | null;
}