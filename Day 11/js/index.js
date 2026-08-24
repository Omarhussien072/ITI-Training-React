/*                      ========== activity ==========
var first_name = "Omar hussien";
var age = 23;
var is_Student = false;


console.log(`My name is: ${first_name} and my age is: ${age}`);
age++;
console.log(`My name is: ${first_name} and my age is: ${age}`);
console.log(`My name is: ${first_name} and my age is: ${age} and am I a student?: ${is_Student}`);
                        ========== activity ==========
*/

// Task1
window.alert(`Welcome to (Rock & Paper & Sissor) choose carefully press ok to continue!`)
var user1_choice = window.prompt(`Enter your choice: `)
var user2_choice = window.prompt(`Enter your choice: `)

if ((user1_choice === 'rock' && user2_choice === 'sissor') ||
    (user1_choice === 'sissor' && user2_choice === 'paper') ||
    (user1_choice === 'paper' && user2_choice === 'rock')) {
    window.alert('user1 wins!');
} else if (user1_choice === user2_choice) {
    window.alert(`It's a tie!`);
} else {
    window.alert(`user2 wins!`);
}

// Task2
var grade = 100;

if (grade >= 90) {
    console.log(`Excellent`);
} else if (grade >= 80 && grade < 90) {
    console.log(`Good`);
} else if (grade >= 70 && grade < 80) {
    console.log(`Average`);
} else if (grade >= 60 && grade < 70) {
    console.log(`Pass`);
} else {
    console.log('Fail');
}