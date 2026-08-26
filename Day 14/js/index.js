const numbers = [5,10,15,20];

let sum = (sum, num) => {
    return sum + num;
}

console.log(`Sum: ${numbers.reduce(sum,0)}`);