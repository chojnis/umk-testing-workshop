/* TODO Zadanie 2 - mockowanie
Napisać testy do pierwszej funkcji greetings i greetingsRandom

Każda z funkcji powinna mieć oddzielny describe w pliku z testami.

Mockowanie - czyli pozorowanie jakiegoś elementu, żeby przetestować powiązania między kodem poprzez zastąpienie rzeczywistej implementacji funkcji.
https://vitest.dev/api/mock
Może się przydać - vi.fn(() => {})
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
