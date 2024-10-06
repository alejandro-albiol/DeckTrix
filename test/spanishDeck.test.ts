import { Card } from "../src/cards/Card";
import { SpanishDeck } from "../src/decks/SpanishDeck";

describe("SpanishDeck", () => {
    let spanishDeck: SpanishDeck;

    beforeEach(() => {
        spanishDeck = new SpanishDeck();
    });

    test("should create a deck of 40 cards", () => {
        expect(spanishDeck.getCards().length).toBe(40);
    });

    test("should contain correct suits", () => {
        const expectedSuits = ["oros", "copas", "espadas", "bastos"];
        expect(spanishDeck.getSuits()).toEqual(expectedSuits);
    });

    test("should contain correct values", () => {
        const expectedValues = ["as", "dos", "tres", "cuatro", "cinco", "seis", "siete", "sota", "caballo", "rey"];
        expect(spanishDeck.getValues()).toEqual(expectedValues);
    });

    test("should initialize the deck with correct cards", () => {
        const cards = spanishDeck.getCards();
        const expectedCards = [
            new Card("oros", "as"), new Card("oros", "dos"), new Card("oros", "tres"),
            new Card("oros", "cuatro"), new Card("oros", "cinco"), new Card("oros", "seis"),
            new Card("oros", "siete"), new Card("oros", "sota"), new Card("oros", "caballo"), new Card("oros", "rey"),
            new Card("copas", "as"), new Card("copas", "dos"), new Card("copas", "tres"),
            new Card("copas", "cuatro"), new Card("copas", "cinco"), new Card("copas", "seis"),
            new Card("copas", "siete"), new Card("copas", "sota"), new Card("copas", "caballo"), new Card("copas", "rey"),
            new Card("espadas", "as"), new Card("espadas", "dos"), new Card("espadas", "tres"),
            new Card("espadas", "cuatro"), new Card("espadas", "cinco"), new Card("espadas", "seis"),
            new Card("espadas", "siete"), new Card("espadas", "sota"), new Card("espadas", "caballo"), new Card("espadas", "rey"),
            new Card("bastos", "as"), new Card("bastos", "dos"), new Card("bastos", "tres"),
            new Card("bastos", "cuatro"), new Card("bastos", "cinco"), new Card("bastos", "seis"),
            new Card("bastos", "siete"), new Card("bastos", "sota"), new Card("bastos", "caballo"), new Card("bastos", "rey"),
        ];
        
        expect(cards).toEqual(expect.arrayContaining(expectedCards));
    });
});
