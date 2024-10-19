import { Card } from "./Card";
import { IDraw } from "./interfaces/IDraw";
import { IShuffle } from "./interfaces/IShuffle";
import { supabase } from "./supabase/supabaseClient";

export class Deck implements IDraw, IShuffle {
    protected cards: Card[];

    constructor(deckId: number) {
        this.cards = [];
        this.getCardsForDeck(deckId);
    }

    async getCardsForDeck(deckId: number): Promise<void> {
        try {
            const { data, error } = await supabase
                .from('deck_cards')
                .select('card_id, cards(suit, value)')
                .eq('deck_id', deckId);

            if (error) {
                throw new Error(`Error fetching cards: ${error.message}`);
            }

            this.cards = data.map((item: any) => new Card(item.cards.suit, item.cards.value));
        } catch (error) {
            console.error(error);
            this.cards = [];
        }
    }

    drawCard(): Card | null {
        return this.cards.length > 0 ? this.cards.pop() || null : null;
    }

    public shuffleCards(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    getRemainingCards(): number {
        return this.cards.length;
    }
}
