function numberOfLettersInAString(string,letter) {
  var numberOfLetters = string.split(letter).length-1;
  console.log(numberOfLetters);
  return numberOfLetters;
}

numberOfLettersInAString("Szkoła Programowania Akademia 108","a");

