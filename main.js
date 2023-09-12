// Exercise 1
function globFunc() {
    return this;
}

const methodObj = {
    name: 'Tyler',
    age: 42,
    nameAndAge: function() {
        return this.name + ' ' + this.age;
    }
}

const arrowObj = {
    id: 8119998819991197253,
    getId: () => {
        return this.id;
    }
}

console.log(globFunc());
console.log(methodObj.nameAndAge());
console.log(arrowObj.getId());

// The global function returns the Window object.
// The object method returns the values it was supposed to.
// The arrow function in an object returned undefined.

// Exercise 2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.name}. I heard you are ${this.age}.`);
    }
}

const per1 = new Person('Tyler', 42);
const per2 = new Person('Vickie', 39);

per1.greet();
per2.greet();

// Exercise 3
// I already had my constructor set up to accept and initialize the name and age.
const per3 = new Person('Jon', 25);
const per4 = new Person('Jayne', 27);

per3.greet();
per4.greet();

// Exercise 4
class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.name}. I heard you are ${this.age}.`);
    }

    static info() {
        return 'This is a Person class.';
    }

    callInfo() {
        this.info();
    }
}

const staticPer1 = new Person4();
const staticPer2 = new Person4();

// console.log(staticPer2.info());
console.log(Person4.info());

// Calling it from an instance gets an error 'info not a function'.
// Calling it from the class gets the intended result.

// Exercise 5
class Person5 {
    #privateVar = 20;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.name}. I heard you are ${this.age}.`);
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    get private() {
        return this.#privateVar;
    }

    set private(variable) {
        this.#privateVar = variable;
    }
}

const getPerson = new Person5('Jim', 25);
const setPerson = new Person5('Pam', 25);
const privatePerson = new Person5('Test', 42);

console.log(getPerson.age);
setPerson.setAge = 27;
console.log(setPerson.age);
setPerson.setAge = -5;
console.log(setPerson.age);

console.log(privatePerson.private);
privatePerson.private = 50;
console.log(privatePerson.private);

// Negative ages work. Possible area for catching a mistake from user input.

// Exercise 6
// The first test checks to see whether the get function works and returns a number.
// The second test checks whether the random number is different between instances.
// Both are solvable by instantiating a random number with Math.random() and returning
// this.#id from the the getID function.
// https://github.com/tsfento/private-fields-in-classes

// Exercise 7
class Library {
    constructor() {
        this.library = [];
    }

    addBook(book) {
        this.library.push(book);
    }

    removeBook(book) {
        const bookISBN = book.getISBN();

        this.library = this.library.filter(book => book.getISBN() !== bookISBN);
    }

    listBooks() {
        return this.library;
    }
}

class Book {
    #ISBN;

    constructor(title, author, year, isbn) {
        this.title = title;
        this.author =  author;
        this.year = year;
        this.#ISBN = isbn;
    }

    getISBN() {
        return this.#ISBN;
    }
}

const lib1 = new Library();

const systemCollapse = new Book('System Collapse', 'Martha Wells', 2023, 123456);
const replay = new Book('Replay', 'Ken Grimwood', 1986, 654321);
const accidentalTimeMacihne = new Book('The Accidental Time Machine', 'Joe Haldeman', 2007, 456123);

lib1.addBook(systemCollapse);
lib1.addBook(replay);
lib1.addBook(accidentalTimeMacihne);
console.log(lib1.listBooks());
lib1.removeBook(replay);
console.log(lib1.listBooks());
lib1.removeBook(systemCollapse);
console.log(lib1.listBooks());

// Exercise 8
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = [grade];
    }

    addGrade(grade) {
        this.grade.push(grade);
    }

    computeAverage() {
        let sum1 = 0;

        for (let i = 0; i < this.grade.length; i++) {
            sum1 += this.grade[i];
        }

        console.log(this);

        return sum1 / this.grade.length;
    }

    computeAverageArrow = () => {
        let sum2 = 0;

        for (let i = 0; i < this.grade.length; i++) {
            sum2 += this.grade[i];
        }

        console.log(this);

        return sum2 / this.grade.length;
    }
}

const student1 = new Student('Tyler', 97);

console.log(student1);
student1.addGrade(98);
console.log(student1);
console.log(student1.computeAverage());
console.log(student1.computeAverageArrow());

student1.computeAverage();
student1.computeAverageArrow();