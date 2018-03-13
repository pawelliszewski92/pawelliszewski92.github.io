function reverseString(string) {
    var splitString = string.split("");
    var splitReverse = splitString.reverse();
    var splitJoin = splitReverse.join("");
    return splitJoin;
}

var akademiaStringReverse = reverseString("Akademia108");
console.log(akademiaStringReverse);