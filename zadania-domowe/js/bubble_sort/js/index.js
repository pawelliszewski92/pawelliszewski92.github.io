var givenArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function bubbleSort(array) {
    for(var i=0; i<array.length; i++) {
        for(var j=0; j<array.length ;j++){
            if(array[j] > array[j+1]) {
               var a = array[j];
               array[j] = array[j+1];
               array[j+1] = a;
            }
        }
    }
    console.log(array);
}

bubbleSort(givenArray);