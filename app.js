'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n){
    //メモにデータがあればそれを使う
    if (memo.has(n)){ 
        return memo.get(n);
    }else {
    //メモにデータがないので計算する
    let value = fib(n-1) +fib(n-2);
    memo.set(n,value);    
    return value;
    }
}
for(let i = 1; i <= 40; i++){
    fib(i)
    console.log(i + "フィボナッチ数は" + fib(i) +"です。")
}