let userNameInput = document.getElementById('username');
let userAgeInput = document.querySelector('#age');
let userJobInput = document.querySelector('#job-title');
let submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (e) => {
    if (userNameInput.value !== '' && userAgeInput !== '' && userJobInput !== '') {
        e.preventDefault() // To prevent the page to reload it self upon pressing ok at the you're under age alert.
        if (userAgeInput.value < 18) {
            alert("You are under age");
            return
        } else {
            alert("Registration Completed");
            console.log(`Name: ${userNameInput.value}\nAge: ${userAgeInput.value}\nJob: ${userJobInput.value}`);
            userNameInput.value = '';
            userAgeInput.value = ''
            userJobInput.value = '';
        }
    } else {
        alert("Please fill all fields");
    }
});




