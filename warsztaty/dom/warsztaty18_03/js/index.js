function pobierzImie(event) {
    event.preventDefault();
    var fnameValue = document.getElementsByTagName("input")[0].value;
    var lnameValue = document.getElementsByTagName("input")[1].value;
    console.log(fnameValue + " " + lnameValue);
}

var zmianaTlaButton = document.getElementById("button");

var container = document.getElementById("container");

zmianaTlaButton.addEventListener("click", function(event) {
   var akapity = document.getElementsByTagName("p");
   container.children[0].style.backgroundColor = "red";
   akapity[1].style.backgroundColor = "yellow"; 
});