import { adjectives } from './words/adjectives';
import { nouns } from './words/nouns';

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
}