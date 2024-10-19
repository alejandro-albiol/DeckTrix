import { ISuit } from "./interfaces/ISuits";
import { IValue } from "./interfaces/IValue";

export class Card implements ISuit, IValue {
    private suit: string;
    private value: number;

    constructor(suit: string, value: number) {
        this.suit = suit;
        this.value = value;
    }

    getSuit(): string {
        return this.suit;
    }

    getValue(): number {
        return this.value;
    }

    toString(): string {
        return `${this.suit} of ${this.value}`;
    }
}