const fibonacci = function(num) {
    //In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
    let fib = 1;
    let arr = [];
    num = Number(num);

    if(num === 0){
        return 0;
    }
    else if(num < 0){
        return "OOPS";
    }
    else{
        for(let e = 0; e < num - 1; e++){
            arr.push(fib);
            if(e === 0){
                fib = 1;
            }
            else {
                fib = arr[e] + arr[e - 1];
            }
            // console.log("Fib is " + fib)
            // console.log(arr)
        }
    
        return fib;
    }

    
};

// Do not edit below this line
module.exports = fibonacci;
