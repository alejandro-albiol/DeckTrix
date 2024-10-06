// test/frenchDeck.test.ts
import { FrenchDeck } from "../src/decks/FrenchDeck";
import { Card } from "../src/cards/Card";

describe("FrenchDeck", () => {
    let frenchDeck: FrenchDeck;

    beforeEach(() => {
        frenchDeck = new FrenchDeck();
    });

    test("should create a deck of 52 cards", () => {
        expect(frenchDeck.getCards().length).toBe(52);
    });

    test("should contain correct suits", () => {
        const expectedSuits = ["corazones", "diamantes", "tréboles", "picas"];
        expect(frenchDeck.getSuits()).toEqual(expectedSuits);
    });

    test("should contain correct values", () => {
        const expectedValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        expect(frenchDeck.getValues()).toEqual(expectedValues);
    });

    test("should initialize the deck with correct cards", () => {
        const expectedCards = [
            new Card("corazones", "2"), new Card("corazones", "3"), new Card("corazones", "4"),
            new Card("corazones", "5"), new Card("corazones", "6"), new Card("corazones", "7"),
            new Card("corazones", "8"), new Card("corazones", "9"), new Card("corazones", "10"),
            new Card("corazones", "J"), new Card("corazones", "Q"), new Card("corazones", "K"), new Card("corazones", "A"),
            new Card("diamantes", "2"), new Card("diamantes", "3"), new Card("diamantes", "4"),
            new Card("diamantes", "5"), new Card("diamantes", "6"), new Card("diamantes", "7"),
            new Card("diamantes", "8"), new Card("diamantes", "9"), new Card("diamantes", "10"),
            new Card("diamantes", "J"), new Card("diamantes", "Q"), new Card("diamantes", "K"), new Card("diamantes", "A"),
            new Card("tréboles", "2"), new Card("tréboles", "3"), new Card("tréboles", "4"),
            new Card("tréboles", "5"), new Card("tréboles", "6"), new Card("tréboles", "7"),
            new Card("tréboles", "8"), new Card("tréboles", "9"), new Card("tréboles", "10"),
            new Card("tréboles", "J"), new Card("tréboles", "Q"), new Card("tréboles", "K"), new Card("tréboles", "A"),
            new Card("picas", "2"), new Card("picas", "3"), new Card("picas", "4"),
            new Card("picas", "5"), new Card("picas", "6"), new Card("picas", "7"),
            new Card("picas", "8"), new Card("picas", "9"), new Card("picas", "10"),
            new Card("picas", "J"), new Card("picas", "Q"), new Card("picas", "K"), new Card("picas", "A"),
        ];

        expect(frenchDeck.getCards()).toEqual(expect.arrayContaining(expectedCards));
    });
});
