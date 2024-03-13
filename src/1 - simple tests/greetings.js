/* TODO Zadanie 1 - testy jednostkowe dla poniższej funkcji.
Testy powinny sprawdzać przypadki:
- gdy nie podamy żadnych parametrów do funkcji
- gdy podamy tylko name
- gdy podamy name i język inny niż pl
 */

function greetings(name, lang = 'pl') {
  const greeting = lang === 'pl' ? 'Hej' : 'Hello';
  if (!name) {
    return `${greeting} nieznajomy`;
  }
  return `${greeting} ${name}!`;
}

export { greetings };
