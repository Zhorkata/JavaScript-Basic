// !!!NOT FINISHED!!!

function evenOdd(input){
let nums = Number(input[0]);

let evenSum = 0;
let oddSum = 0
for(let i = 1; i <= nums;i++){
let curNum = Number(input[i]);

if(i % 2 === 0){
    evenSum += curNum; //8 EVEN SUM
}
if(i % 2 !== 0){
    oddSum += curNum;//9 ODD SUM
}


}

console.log(`OddSum=" + ${oddSum},`);
console.log(`OddMin=" + { минимална стойност на числата на нечетни позиции } / {“No”},`);
console.log(`OddMax=" + { максимална стойност на числата на нечетни позиции } / {“No”},`);
console.log(`EvenSum=" + ${evenSum},`);
console.log(`EvenMin=" + { минимална стойност на числата на четни позиции } / {“No”},`);
console.log(`EvenMax=" + { максимална стойност на числата на четни позиции } / {“No”}`);
}
evenOdd([
    6,
    2,
    3,
    5,
    4,
    2,
    1
     
])
