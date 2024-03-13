/* TODO Zadanie 3 - mockowanie modułu
Napisać testy dla funkcji greetingsRandom mockując całe moduły

Może się przydać - vi.mock('src do modułu')
 */

import { config } from '../utils/config';
import { random } from '../utils/random';

function greetings(name) {
  const greeting = config.lang === 'pl' ? 'Hej' : 'Hello';
  if (!name) {
    return `${greeting} nieznajomy`;
  }
  return `${greeting} ${name}!`;
}

function randomGreetings(name) {
  const greeting = random.getRandomGreeting();
  if (!name) {
    return `${greeting} nieznajomy`;
  }
  return `${greeting} ${name}!`;
}

export { greetings, randomGreetings };
