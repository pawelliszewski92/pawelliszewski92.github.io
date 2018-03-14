var givenArray = [0, 1, 2, 3, 4, 5];

function sumSqrArray(array) {
    var total = 0;
    for(i=0;i<array.length;i++) {
        var sum = total += Math.pow(array[i], 2);
    }
    console.log(sum);
}

sumSqrArray(givenArray);