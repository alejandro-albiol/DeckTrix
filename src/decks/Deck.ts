import { Card } from "../cards/Card";
import { IShuffle } from "../interfaces/IShuffle";
import { IDraw } from "../interfaces/IDraw"; 
import { IGetCards } from "../interfaces/IGetCards"; 

export abstract class Deck implements IShuffle, IDraw, IGetCards {

    protected cards: Card[];

    constructor() {
        
        this.cards = [];
    }

    shuffle(): void {
        let N = this.cards.length - 1;
        while (N > 0) {
            const R = Math.floor(Math.random() * (N + 1));
            [this.cards[R], this.cards[N]] = [this.cards[N], this.cards[R]];
            N--;
        }
    }

    draw(): Card | null {
        return this.cards.length > 0 ? this.cards.pop() || null : null;
    }

    addCard(card: Card): void {
        this.cards.push(card);
    }

    getCards(): Card[] {
        return this.cards;
    }
}
