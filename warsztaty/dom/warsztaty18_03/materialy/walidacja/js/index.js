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



