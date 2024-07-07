let currDate = document.getElementById("currDate");

let today = new Date();
currDate.innerText = `Today's Date is : ${today.toLocaleDateString('en-US')}`;

let dateOfBirth = document.querySelector("#DOB");

let CalcAge = document.querySelector('#CalcAge');

let displayAge = document.querySelector('.displayAge');
let ageElement = document.getElementById('age');

CalcAge.addEventListener("click", () => {
    let birthDate = new Date(dateOfBirth.value);
    if (birthDate > today) {
        ageElement.innerText = "Invalid date";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    
    displayAge.style.visibility = "visible";
    ageElement.innerText = `You are ${age} years old.`;
});


let resetButton = document.getElementById('reset');
resetButton.addEventListener("click", () => {
    displayAge.style.visibility = "hidden";
    dateOfBirth.value = '';
});
Explanatio