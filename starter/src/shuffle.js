// shuffle.js
// This function shuffles an array of flashcards

const shuffle = (cards) => {
  let current = cards.length;
  const newCardsArray = [...cards];

  while (current !== 0) {
    // Pick a random index
    let randomIndex = Math.floor(Math.random() * current);
    current--;

    // Swap current card with the random card
    [newCardsArray[current], newCardsArray[randomIndex]] = [
      newCardsArray[randomIndex],
      newCardsArray[current],
    ];
  }

  return newCardsArray;
};

export { shuffle };
