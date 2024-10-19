import { BlackjackGame } from '../../build/src/games/BlackjackGame.js';
import { Deck } from '../../build/src/Deck.js';

document.addEventListener('DOMContentLoaded', () => {
    const userCardsDiv = document.getElementById('user-cards');
    const aiCardsDiv = document.getElementById('ai-cards');
    const hitButton = document.getElementById('hit-button');
    const standButton = document.getElementById('stand-button');

    const deck = new Deck(1);
    const game = new BlackjackGame(deck);

    game.startGame();
    updateUI();

    hitButton.addEventListener('click', () => {
        const card = deck.drawCard();
        if (card) {
            game.userHand.push(card);
            updateUI();
            checkGameStatus();
        }
    });

    standButton.addEventListener('click', () => {
        game.playTurn();
        updateUI();
        checkGameStatus();
    });

    function updateUI() {
        userCardsDiv.innerHTML = game.userHand.map(card => `<span>${card.getValue()} of ${card.getSuit()}</span>`).join(' ');
        aiCardsDiv.innerHTML = game.aiHand.map(card => `<span>${card.getValue()} of ${card.getSuit()}</span>`).join(' ');
    }

    function checkGameStatus() {
        const userScore = game.calculateHandValue(game.userHand);
        if (userScore > BlackjackGame.BUST_THRESHOLD) {
            alert("User busts! AI wins!");
            resetGame();
        }
    }

    function resetGame() {
        game.startGame();
        updateUI();
    }
});
