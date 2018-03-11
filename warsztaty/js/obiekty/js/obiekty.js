var obiekt = {
    name: "Pierwszy obiekt",
    height: 180,
    print: function() {
        console.log(this.name);
    },
    //ten przecinek na gorze jest opcjonalny, jako ze jest to ostatni element obiekty, ale gdybym chcial pisac dalej, to jest konieczny
}

obiekt.print();



obiekt.age = 32;
obiekt.showAge = function() {
    console.log(this.age);
}

console.log(obiekt);

obiekt.showAge();