class WordRepository {
  static LEVELS = ["A1-A2", "B1-B2", "C1-C2"];

  constructor(words = null) {
    this.words = words || {
      "A1-A2": ["apple", "book", "cat", "dog", "egg", "banana", "computer", "dolphin", "flower", "guitar"],
      "B1-B2": ["adventure", "business", "celebrate", "discovery", "expression", "boundary", "moderate", "inhabit", "neglect", "persist"],
      "C1-C2": ["ubiquitous", "ephemeral", "ineffable", "serendipity", "obfuscate"]
    };
  }

  getRandomWord(level) {
    const words = this.words[level];
    return words[Math.floor(Math.random() * words.length)];
  }
}