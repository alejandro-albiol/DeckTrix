import { supabase } from '../src/supabase/supabaseClient';
import { Deck } from '../src/Deck';

describe('fetchDeckCards', () => {
    it('should return cards for a valid deck ID', async () => {
        const deckId = 1;
        const deck1 = new Deck(deckId);
        await deck1.getCardsForDeck(deckId);

        const cards = (deck1 as any).cards; // Accessing protected property for testing purposes
        expect(cards).toBeDefined();
        expect(cards.length).toBeGreaterThan(0);
        expect(cards[0]).toHaveProperty('suit');
        expect(cards[0]).toHaveProperty('value');
    });

    it('should return an error for an invalid deck ID', async () => {
        const invalidDeckId = -1;
        const deck1 = new Deck(invalidDeckId);
        await deck1.getCardsForDeck(invalidDeckId);

        const cards = (deck1 as any).cards; // Accessing protected property for testing purposes
        expect(cards).toEqual([]);
    });
});
