function numberOfLettersInAString(string,letter) {
  var regex = new RegExp(letter, "gi");
  console.log(regex);
  var numberOfLetters = string.match(regex).length;
  console.log(numberOfLetters);
  return numberOfLetters;
}

numberOfLettersInAString("Szkoła Programowania Akademia 108","a");