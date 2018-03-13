function sortLetters(string) {
    var splitString = string.split("");
    var sortStringLetters = splitString.sort();
    var joinLetters = sortStringLetters.join("");
    return joinLetters;
}

var akademiaSortLetters = sortLetters("Akademia108");
console.log(akademiaSortLetters);