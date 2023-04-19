// DOM test

// part 1 - get HTML's elements

// const title = document.getElementById("title");
const button = document.querySelector("#btn");
const input = document.querySelector("#input");
const p = document.querySelector("#p1");
const min = document.querySelector("#minNum");
const max = document.querySelector("#maxNum");

// let amount = 0;
let ans = 6;
let minNum = 1;
let maxNum = 100;


button.addEventListener("click", function(){
    // amount += 1;
    // title.innerText = amount;
    // console.log(title);
    // input.value = null;
    // 猜的數字
     let  guess = +input.value;
     input.value = null;

    if(guess > maxNum || guess < minNum){
        p.innerText = "是文盲嗎 ??";
        return;
    }

    if( guess < ans){
        minNum = guess;
        min.innerText = guess;
    }

     if(guess > ans){
        maxNum = guess;
        max.innerText = guess;
    }
    
    if(guess == ans){
        p.innerText = "BOOM !!!"
        max.innerText = (+guess);
        min.innerText = (+guess);
    }
    
    
    
    
     
   
});
