// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cleanString = (str: string) => {
  // removing all the spaces
  // converting the string to lower case
  // converting the string into an array
  // using the .sort() method to order the array
  // converting that array to string again (this will give us
  // an alphabetically ordered string) -> abcde...
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

// example: 'xxxxx' -> { x: 5 } so the letter x is found 5 times
const buildCharMap = (str: string): { [key: string]: number } => {
  const charMap: { [key: string]: number } = {};

  // Go through every character in the string
  // deleting the spaces in the string all the spaces and converting to lower case
  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  // Return the string converted in object
  // example: 'xxxxx' -> { x: 5 }
  return charMap;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const anagrams = (stringA: string, stringB: string): boolean => {
  // Converting each string in object format
  // to know how many times a letter is found in the string
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // If the keys length of each object is different of another
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    // then are not anagram
    return false;
  }

  // Go through every node of the object
  for (const char in aCharMap) {
    // If some value of each key of the object
    // is different from the other value of the object
    if (aCharMap[char] !== bCharMap[char]) {
      // then are not anagram
      return false;
    }
  }

  // Then return true means that are anagrams
  return true;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const maxCharacterInString = (str: string): string => {
  interface MaxCharacter {
    character: string;
    count: number;
  }

  const characters: { [key: string]: number } = {};
  const maxCharacter: MaxCharacter = {
    character: '',
    count: 0,
  };

  for (const character of str) {
    characters[character] = characters[character] + 1 || 1;

    if (maxCharacter.count === characters[character]) {
      maxCharacter.character = `${maxCharacter.character}, ${character}`;
      maxCharacter.count = characters[character];
    } else if (maxCharacter.count < characters[character]) {
      maxCharacter.character = character;
      maxCharacter.count = characters[character];
    }
  }

  return maxCharacter.character;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const arrayChunk = <T>(array: T[], size: number): T[][] => {
  const chunkedArray: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }

  return chunkedArray;
};
