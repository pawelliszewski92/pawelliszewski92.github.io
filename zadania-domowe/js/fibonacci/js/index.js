//var fib = [0, 1];
//
//function fibonacci(n) {
//    if(n < 2) {
//        console.log(n);
//    } else {
//    for(i=0;i<n-2;i++) {
//        var newFib = fib[i] + fib[i+1];
//        fib.push(newFib);
//        
//    }
//      console.log(newFib);  
//    }
//    
//}
//
//fibonacci(0);
//fibonacci(1);
//fibonacci(2);
//fibonacci(3);
//fibonacci(4);
//fibonacci(5);
//fibonacci(6);
//fibonacci(7);


//function fibonacci(n) {
//  if(n === 0) {
//      return 0;
//  } if (n <= 2) {
//      return 1;
//  } else {
//  return fibonacci(n-1) + fibonacci(n-2);
//}
//}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));


function fibonacci(n) {
    if(n == 1) {
        return 0;
    } 
    if( n == 2) {
        return 1;
    }
    
    var fibPrev = 0;
    var fibNext = 1;
    var fibCurrent = 0;
    
    for (var i =2; i<n; i++) {
    fibCurrent = fibPrev + fibNext;
    fibPrev = fibNext;
    fibNext = fibCurrent;
 }
    return fibCurrent;
}


console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));





































