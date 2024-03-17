let firstName = "Jake";

const states = 50;

var answer = 4 + 5;

//Theses commments are for the documentation of the code

function sayHello() {
    alert("Hello World!")
}

sayHello()

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + " you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

var favoriteVegetables = ["Lettuce", "Apple", "Corn"]

favoriteVegetables.forEach((item) =>
    console.log(item));

var pet = {
    "name": "Finley",
    "breed": "orange-tabby"
}

console.log(pet.name);
console.log(pet.breed);

var names = [
    {
        "name": "John",
        "age": 22
    },
    {
        "name": "Jim",
        "age": 27
    },
    {
        "name": "Jill",
        "age": 18
    },
    {
        "name": "Jame",
        "age": 12
    },
    {
        "name": "Jack",
        "age": 290
    }

]

names.forEach((item) =>
    checkAge(item.name, item.age));

function getLength(word) {
    var len = word.length
    if (len % 2 == 0) {
        console.log("The world is nice and even!")
    }
    else {
        console.log("The world is an odd place!")
    }
}

getLength("Hello World")