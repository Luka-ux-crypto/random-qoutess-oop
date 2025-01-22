import quotes from '../data/quotes.js';
import MathUtils from '../Utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static async getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const option = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, option);
      const { id, quote, author } = await response.json();
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
