// functions 


let userName = "Artemiy";
let age = 27;
let gender = "male";
function sayHello(name, age, gender) {
    alert("Hello, dear user " + name);
    if (age < 18) {
        alert("You are too young!")
    }
    if (gender === "male") {
        alert("Welcome to the club!")
    }
}

sayHello(userName, age, gender);
