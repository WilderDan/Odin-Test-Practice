function ceasarCipher(plainText, shift) {
  let cipherText = "";

  for (let char of plainText) {
    cipherText += getCipherChar(char, shift);
  }

  return cipherText;
}

function getCipherChar(char, shift) {
  const found = findAlphabetIndex(char);
  if (found.index === -1) return char;

  const index = (found.index + shift) % found.alphabet.length;
  return found.alphabet[index];
}

function findAlphabetIndex(char) {
  const LOWER_ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const UPPER_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let alphabet = LOWER_ALPHABET;
  let index = alphabet.indexOf(char);

  if (index === -1) {
    alphabet = UPPER_ALPHABET;
    index = alphabet.indexOf(char);
  }

  return { alphabet, index };
}

module.exports = ceasarCipher;
