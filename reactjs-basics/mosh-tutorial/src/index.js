import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root"));

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined1 = second.concat(first);
console.log(combined1);
const combined2 = [...first, 3, 10, ...second];
console.log(combined2);
