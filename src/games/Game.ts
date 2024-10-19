import { Deck } from "../Deck";

export abstract class Game {
    protected deck: Deck;

    constructor(deck: Deck) {
        this.deck = deck;
    }

    abstract startGame(): void;
    abstract playTurn(): void;
    abstract endGame(): void;
}
