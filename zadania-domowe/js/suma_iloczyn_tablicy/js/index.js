var givenArray = [1,2,3,4,5,6];

function sumArray(arrayParam) {
    var sum = 0;
    for (i=0; i < arrayParam.length; i++) {
        var summedArray = sum += arrayParam[i];
    }
    console.log(summedArray);
}

sumArray(givenArray);



function multiplyArray(arrayParam) {
    var total = 1;
    for (i=0; i < arrayParam.length; i++) {
        var multipliedArray = total *= arrayParam[i];
    }
    console.log(multipliedArray);
}

multiplyArray(givenArray);