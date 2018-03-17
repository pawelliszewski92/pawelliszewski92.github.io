var fib = [0, 1];

function fibonacci(n) {
    if(n < 2) {
        console.log(n);
    } else {
    for(i=0;i<n-2;i++) {
        var newFib = fib[i] + fib[i+1];
        fib.push(newFib);
        
    }
      console.log(newFib);  
    }
    console.log(fib);
    
}

fibonacci(3);




