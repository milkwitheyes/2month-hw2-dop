
let arr = [100, 55, 15, 300, 20];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    console.log(`${sum} + ${arr[i]} = ${sum + arr[i]}`);
    sum += arr[i];
}

console.log("Итоговая сумма: " + sum);
