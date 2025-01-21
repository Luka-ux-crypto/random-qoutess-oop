import quotes from '../data/quotes.js';
import MathUtils from '../Utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const option = { headers: { 'Content-Type': 'application/json' } };

    return fetch(url, option)
      .then((response) => response.json())
      .then(({ id, quote, author }) => new Quote(id, quote, author))
      .catch((error) => {
        console.log('Error:', error);
      });
  }
}

export default RandomQuote;
