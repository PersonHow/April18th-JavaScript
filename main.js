console.log("Hello World")

let total = 0;
let sum = 0
let mapSum = 0;
const totalArr = [];

for(let i = 0 ; i <= 1000 ; i+=2){
   total = total + i;
}
console.log(total)

for (let i = 1; i <= 1000; i++){
   totalArr.push(i);
}

console.log(totalArr)

const totalArrFilter = totalArr.filter(function(i){
   return i % 2 == 0
})
console.log("----------------------------");
console.log("Filter:");
console.log(totalArrFilter)
let f= 0;
for(let i = 0; i <= totalArrFilter.length; i++){
  
   f = totalArrFilter[i];
   // console.log(f);
   sum = sum +f;
   if(i == (totalArrFilter.length-1)){
   console.log(sum);}
}

console.log("----------------------------");
console.log("MAP:");
const totalArrMap = totalArr.map(function(i){
   return i+1;
})

const totalArrMapFilter = totalArrMap.filter(function(i){
   return i % 2 == 0
})
console.log(totalArrMapFilter)

for(let i = 0; i <= totalArrMapFilter.length-1; i++){
   let map = 0
      map = totalArrMapFilter[i];
      mapSum += map;
   
}

console.log(mapSum);


// arr = [10,20,30]

// for(let i = 0 ; i < arr.length; i++){
//    console.log(arr[i]);
// }

// arr.forEach(
//    function(i){
//       console.log(i);
//    }
// )
// const filterArr = arr.filter(function(i){
//    return i % 20 ==0
// });
// console.log(filterArr);

// const mapArr = arr.map(function(i){  
//    return i +1
// });

// console.log(mapArr);

// arr.sort();
// arr.reverse();

// console.log(arr);
