import { Card } from "../cards/Card";
import { Deck } from "./Deck";

export class SpanishDeck extends Deck {

    private static SUITS: string[] = ["oros", "copas", "espadas", "bastos"];
    private static VALUES: string[] = ["as", "dos", "tres", "cuatro", "cinco", "seis", "siete", "sota", "caballo", "rey"];

    constructor() {
        super();
        this.initializeDeck();
    }

    private initializeDeck(): void {
        for (const suit of SpanishDeck.SUITS) {
            for (const value of SpanishDeck.VALUES) {
                this.addCard(new Card(suit, value));
            }
        }
    }

    public getSuits(): string[] {
        return SpanishDeck.SUITS;
    }

    public getValues(): string[] {
        return SpanishDeck.VALUES;
    }
}
