import { Game } from "./Game";
import { Deck } from "../Deck";
import { Card } from "../Card";

class BlackjackGame extends Game {
    private userHand: Card[] = [];
    private aiHand: Card[] = [];

    private static readonly ACE_VALUE = 11;
    private static readonly FACE_CARD_VALUE = 10;
    private static readonly ACE_ADJUSTMENT = 10;
    private static readonly BUST_THRESHOLD = 21;
    private static readonly FACE_CARD_VALUES = [11, 12, 13];
    private static readonly AI_HIT_THRESHOLD = 17;

    constructor(deck: Deck) {
        super(deck);
    }

    startGame(): void {
        console.log("Starting Blackjack Game: User vs AI");
        this.deck.shuffleCards();
        this.userHand = [this.deck.drawCard()!, this.deck.drawCard()!];
        this.aiHand = [this.deck.drawCard()!, this.deck.drawCard()!];
        console.log("User's hand:", this.userHand);
        console.log("AI's hand:", this.aiHand[0], "and a hidden card");
    }

    playTurn(): void {
        console.log("User's turn");

        console.log("AI's turn");

        while (this.calculateHandValue(this.aiHand) < BlackjackGame.AI_HIT_THRESHOLD) {
            const drawnCard = this.deck.drawCard();
            if (drawnCard) {
                this.aiHand.push(drawnCard);
            }
        }
    }

    endGame(): void {
        const userScore = this.calculateHandValue(this.userHand);
        const aiScore = this.calculateHandValue(this.aiHand);

        console.log("User's final hand:", this.userHand, "Score:", userScore);
        console.log("AI's final hand:", this.aiHand, "Score:", aiScore);

        if (userScore > BlackjackGame.BUST_THRESHOLD) {
            console.log("User busts! AI wins!");
        } else if (aiScore > BlackjackGame.BUST_THRESHOLD || userScore > aiScore) {
            console.log("User wins!");
        } else if (userScore < aiScore) {
            console.log("AI wins!");
        } else {
            console.log("It's a tie!");
        }
    }

    private calculateHandValue(hand: Card[]): number {
        let value = 0;
        let aceCount = 0;

        for (const card of hand) {
            const cardValue = card.getValue();
            if (cardValue === BlackjackGame.ACE_VALUE) { // Assuming Ace is represented by 1
                aceCount++;
                value += BlackjackGame.ACE_VALUE;
            } else if (BlackjackGame.FACE_CARD_VALUES.includes(cardValue)) { // Assuming J, Q, K are represented by 11, 12, 13
                value += BlackjackGame.FACE_CARD_VALUE;
            } else {
                value += cardValue;
            }
        }

        while (value > BlackjackGame.BUST_THRESHOLD && aceCount > 0) {
            value -= BlackjackGame.ACE_ADJUSTMENT;
            aceCount--;
        }

        return value;
    }
}
