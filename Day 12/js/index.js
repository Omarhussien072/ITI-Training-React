/*                                      ========== Activity ==========
console.log('for loop:');

for(var i = 1; i <= 10; i++){
    console.log(i)
}

console.log('while loop:');
var i = 1;
while(i <= 10) {
    console.log(i)
    i++;
}


console.log('do-while loop:');
i = 1;

do{
    console.log(i);
    i++
}while(i <= 6);

console.log('avg function:');

function getAvg(num1,num2){
    console.log((num1 + num2) / 2);
}

getAvg(10,5);



var user = {
    fullName: "Omar",
    age: "23",
    job: "Engineer",
    salary: "120K",
    is_Student: false
}

console.log(`Name: ${user.fullName} Age: ${user.age} Job: ${user.job}
            Salary: ${user.salary} is student?: ${user.is_Student}`)

                                        ========== Activity ==========
*/

// for loop with local variable
for (var i = 0; i < 10; i++) {
    console.log(i)
}

var i = 0;

// for loop with local variable
for (; i < 5; i++) {
    console.log(i);
}

i = 0;

// while loop
while (i < 10) {
    console.log(i);
    i++
}


i = 0;

// do-while loop
do {
    console.log(i)
    i++;
} while (i < 5);

//declerative function without return
function getAvg(num1, num2) {
    console.log((num1 + num2) / 2);
}

getAvg(10, 5)

//declerative function with return
function getAvg2(num1, num2) {
    return (num1 + num2) / 2;
}

var getavg = getAvg2(15, 5)
console.log(getavg)

//expression function

const getAvg3 = (num1, num2) => (num1 + num2) / 2;
console.log(getAvg3(20, 5));

//An user object that have some data 

var user = {
    fullName: "omar hussien",
    age: 23,
    gender: "male",
    job: "Engineer",
    salary: "120k",
    pet: {
        petName: "Jamaika",
        gender: "male",
        age: 1,
        kind: 'cat'
    },
    isMarried: false,
    isStudent: false,
    studying: () => {
        console.log(`Studying rn...`);
    },
    eat: (meal) => {
        console.log(`Eating ${meal} rn`)
    },
    coding: () => {
        console.log(`coding rn`)
    }
}

console.log(`Hi am ${user.fullName} and this's my pet ${user.pet.petName} he's ${user.pet.age} yrs old ${user.pet.gender} and he's a siyami ${user.pet.kind}, I am an ${user.job} that get ${user.salary} per year, Am I married? ${user.isMarried}, Am I still a student? ${user.isStudent}`)
/*
    converting object to string to handle the server requests and response with JSON json parse to convert from string to object and stringify
    to transform object to string to solf sending data to server problem and make it easy.
*/

var userObjectString = JSON.stringify(user);

console.log(userObjectString);
console.log(JSON.parse(userObjectString))