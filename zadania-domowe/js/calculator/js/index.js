var buttonAns = document.getElementById("answer");

var button1 = document.getElementById("1");
button1.addEventListener('click', function() {
   buttonAns.value += '1'
});

var button2 = document.getElementById("2");
button2.addEventListener('click', function() {
   buttonAns.value += '2'
});

var button3 = document.getElementById("3");
button3.addEventListener('click', function() {
   buttonAns.value += '3'
});

var button4 = document.getElementById("4");
button4.addEventListener('click', function() {
   buttonAns.value += '4'
});

var button5 = document.getElementById("5");
button5.addEventListener('click', function() {
   buttonAns.value += '5'
});

var button6 = document.getElementById("6");
button6.addEventListener('click', function() {
   buttonAns.value += '6'
});

var button7 = document.getElementById("7");
button7.addEventListener('click', function() {
   buttonAns.value += '7'
});

var button8 = document.getElementById("8");
button8.addEventListener('click', function() {
   buttonAns.value += '8'
});

var button9 = document.getElementById("9");
button9.addEventListener('click', function() {
   buttonAns.value += '9'
});

var buttonDot = document.getElementById(".");
buttonDot.addEventListener('click', function() {
   buttonAns.value += '.'
});

var buttonModulo = document.getElementById("modulo");
buttonModulo.addEventListener('click', function() {
   buttonAns.value += '%'
});

var buttonMult = document.getElementById("x");
buttonMult.addEventListener('click', function() {
   buttonAns.value += '*'
});

var buttonDiv = document.getElementById("/");
buttonDiv.addEventListener('click', function() {
   buttonAns.value += '/'
});

var buttonPlus = document.getElementById("+");
buttonPlus.addEventListener('click', function() {
   buttonAns.value += '+'
});

var buttonMin = document.getElementById("-");
buttonMin.addEventListener('click', function() {
   buttonAns.value += '-'
});

var button0 = document.getElementById("0");
button0.addEventListener('click', function() {
   buttonAns.value += '0'
});

var buttonDel = document.getElementById("del");
buttonDel.addEventListener('click', function() {
   buttonAns.value = ''
});

var buttonEq = document.getElementById("=");
buttonEq.addEventListener('click', function() {
   buttonAns.value = eval(buttonAns.value);
});
