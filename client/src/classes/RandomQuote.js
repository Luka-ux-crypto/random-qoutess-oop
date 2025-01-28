import quotes from '../data/quotes.js';
import MathUtils from '../Utils/MathUtils.js';
import Quote from './Quote.js';
import config from '../../config.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static async getRandomQuoteViaPublicAPI() {
    const url = `${config.PUBLIC_API_URL}/quotes/random`;
    const option = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, option);
      const { id, quote, author } = await response.json();
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }
  static async getRandomQuoteViaOwnAPI() {
    const url = `${config.API_URL}/quotes/random-single`;
    const option = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, option);
      const quote = await response.json();
      const { id, text, author } = quote;
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
