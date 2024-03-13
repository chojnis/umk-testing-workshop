export const random = {
  getRandomGreeting: () => {
    const options = ['Hi', 'Hello', 'Elo', 'Hej'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  },
};
