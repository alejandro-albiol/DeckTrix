import { Card } from "../cards/Card";
import { Deck } from "./Deck";

export class FrenchDeck extends Deck {
    private static SUITS: string[] = ["corazones", "diamantes", "tréboles", "picas"];
    private static VALUES: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    constructor() {
        super();
        this.initializeDeck();
    }

    private initializeDeck(): void {
        for (const suit of FrenchDeck.SUITS) {
            for (const value of FrenchDeck.VALUES) {
                this.addCard(new Card(suit, value));
            }
        }
    }

    public getSuits(): string[] {
        return FrenchDeck.SUITS;
    }

    public getValues(): string[] {
        return FrenchDeck.VALUES;
    }
}