/* The four cards */
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
/*
if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}*/

var board = document.getElementById('game-board');
var createCards = function(numCards) {
	for (i = 0; i < numCards; i++) {
		newChild = document.createElement('div');
		newChild.className = 'card';
		board.appendChild(newChild);
	}
}

createCards(4);