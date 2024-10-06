import { FrenchDeck } from "./decks/FrenchDeck";
import { SpanishDeck } from "./decks/SpanishDeck";

const frenchDeck = new FrenchDeck();
const spanishDeck = new SpanishDeck();

console.log(`French Deck has ${frenchDeck.getCards().length} cards.`);
console.log(`Spanish Deck has ${spanishDeck.getCards().length} cards.`);

frenchDeck.shuffle();
spanishDeck.shuffle();

console.log("Some cards from the French Deck:");
frenchDeck.getCards().slice(0, 5).forEach(card => {
    console.log(`${card.value} de ${card.suit}`);
});

console.log("Some cards from the Spanish Deck:");
spanishDeck.getCards().slice(0, 5).forEach(card => {
    console.log(`${card.value} de ${card.suit}`);
});
