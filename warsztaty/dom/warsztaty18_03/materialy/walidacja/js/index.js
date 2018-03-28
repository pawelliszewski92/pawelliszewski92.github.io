var checkboxSelect = document.getElementById("wszystkie-zgody");

var checkboxAll = document.getElementsByClassName("checkbox");

function setCheckboxState(lastCheckboxValue) {
    for(i=0;i<checkboxAll.length;i++) {
        checkboxAll[i].checked = lastCheckboxValue;
        checkboxAll[i].disabled = lastCheckboxValue;
    }    
};

checkboxSelect.addEventListener('change', 
                                function(){
    setCheckboxState(checkboxSelect.checked)});


function clearValidation() {
    var alerts = document.querySelectorAll(".alert");
    for(var i = 0; i<alerts.length; i++) {
        alerts[i].parentElement.removeChild(alerts[i]);
    };
};


var submitButton = document.getElementById("submit");

var inputText = document.querySelectorAll("input[type='text']");

var zgoda1 = document.getElementById("zgoda-marketingowa-1");

function validateForm(e) {
    clearValidation();
    for(var i=0;i<inputText.length;i++) {
        if (inputText[i].value == null || inputText[i].value.trim() === '') {
            e.preventDefault();
            var alert = document.createElement("p");
            alert.innerHTML = ("To pole jest wymagane");
            alert.setAttribute("class", "alert");
            inputText[i].parentElement.insertBefore(alert, inputText[i].nextSibling); 
        };
    };
    if (zgoda1.checked == false) {
        e.preventDefault();
            var alert = document.createElement("p");
            alert.innerHTML = ("To pole jest wymagane");
            alert.setAttribute("class", "alert");
            zgoda1.parentElement.insertBefore(alert, inputText[i].nextSibling);
    };
};

submitButton.addEventListener('click', function(){
   validateForm(event); 
});


