'use strict';
function fib(n){
    if (n===0){
        return 0;
    }else if (n===1){
        return 1;
    }
    return fib(n-1) +fib(n-2);
}
for(let i = 1; i <= 40; i++){
    fib(i)
    console.log(i + "フィボナッチ数は" + fib(i) +"です。")
}