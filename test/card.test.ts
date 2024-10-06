import { Card } from "../src/cards/Card";

describe("Card", () => {
    test("should create a card with suit and value", () => {
        const card = new Card("oros", "as");
        expect(card.suit).toBe("oros");
        expect(card.value).toBe("as");
    });

    test("should return correct suit and value", () => {
        const card = new Card("copas", "rey");
        expect(card.suit).toBe("copas");
        expect(card.value).toBe("rey");
    });
});
