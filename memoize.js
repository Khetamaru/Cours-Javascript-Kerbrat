const memoize = () => {

    let cache = {}

    return (n) => {

        if (n in cache) {
            
          return cache[n];
        }

        else {
          
          result = fibonacci(n);
          cache[n] = result;
          return result;
        }
    }
}

function fibonacci(n) {
    if (n === 0) {
        return 0;

    } else if (n === 1) {
        return 1;

    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const memoizeFun = memoize();
console.log(memoizeFun(42));
console.log(memoizeFun(42));
//console.log(fibonacci(42));
//console.log(fibonacci(42));