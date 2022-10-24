import joker from 'give-me-a-joke';

export function dadJoke() {
  try {
    return new Promise(function (resolve, reject) {
      joker.getRandomDadJoke(resolve);
    });
  } catch (error) {
    reject(error);
  }
}
