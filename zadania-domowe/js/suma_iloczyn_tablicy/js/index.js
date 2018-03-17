var givenArray = [1,2,3,4,5,6];

function sumAndMultiplyArray(arrayParam) {
    var sum = 0;
    for (i=0; i < arrayParam.length; i++) {
        var summedArray = sum += arrayParam[i];
    }
    console.log(summedArray);

     var total = 1;
    for (i=0; i < arrayParam.length; i++) {
        var multipliedArray = total *= arrayParam[i];
    }
    console.log(multipliedArray);
}

sumAndMultiplyArray(givenArray);

