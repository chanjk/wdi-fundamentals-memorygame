var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function isMatch(first, second) {
	if (first.getAttribute('data-card') === second.getAttribute('data-card')) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}

	resetBoard();
};

function isTwoCards() {
	if (cardsInPlay.indexOf(this) < 0) {
		cardsInPlay.push(this);
		flip(this); 
	}

	setTimeout(function() {
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay[0], cardsInPlay[1]);
			cardsInPlay = [];
		}
	}, 0);
}

function flip(card) {
	var image = { 'path' : '""',
				  'alt' : '"Card not found"' };

	switch (card.getAttribute('data-card')) {
		case 'queen':
			image = { 'path' : '"../images/queenSpades.png"',
					  'alt' : '"Queen of Spades"' };
			break;
		case 'king':
			image = { 'path' : '"../images/kingSpades.png"',
					  'alt' : '"King of Spades"' };
			break;
	}

	card.innerHTML = '<img src=' + image['path'] + ' alt=' + image['alt'] + '>';
}

function createBoard() {
	var board = document.getElementById('game-board');

	for (var i = 0; i < cards.length; i++) {
		cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);		
		board.appendChild(cardElement);
	}
};

function resetBoard() {
	var cards = document.querySelectorAll('.card');

	for (var i = 0; i < cards.length; i++) {
		cards[i].innerHTML = '';
	}
}

createBoard();