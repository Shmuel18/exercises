"use strict";
let a = 3;
a = 77;
console.log("hello world !");
const bigNumber = (x, y) => {
    return Math.max(x, y);
};
const printBigNumber = (x, y) => {
    console.log(Math.max(x, y));
};
printBigNumber(3, 7);
const evenOrOdd = (num) => {
    if (num % 2 === 0)
        return "even";
    return "odd";
};
const stringLength = (str) => {
    return str.length;
};
const arrayOfNumbers = (num) => {
    const array = [];
    for (let i = 0; i < num; i++) {
        array.push(i);
    }
    return array;
};
const bigNumberFromArray = (arr) => {
    return Math.max(...arr);
};
const person1 = {
    Name: "erh",
    Age: 36859557886,
    isStudent: true,
};
const person2 = {
    Name: "ethj6rrh",
    Age: 36466,
    isStudent: false,
};
const printPerson = (person) => {
    console.log(person.Name);
    let Age = person.Age;
    let isStudent = person.isStudent;
    console.log(Age.toString());
    console.log(isStudent.toString());
};
printPerson(person1);
const isMinor = (person) => {
    return person.Age < 18 ? true : false;
};
console.log(isMinor(person1));
const book1 = {
    Title: "aaa",
    Author: "bbb",
    Year: 77,
};
const book2 = {
    Title: "aarega",
    Author: "brehbb",
    Year: 77456,
};
const Reader1 = {
    person: person1,
    favoriteBook: book1,
};
const Reader2 = {
    person: person2,
    favoriteBook: book2,
};
const array = [Reader1, Reader2];
const OldestReader = (array) => {
    let name = array[0].person.Name;
    let Age = array[0].person.Age;
    for (let i = 0; i < array.length; i++) {
        if (array[i].person.Age > Age) {
            Age = array[i].person.Age;
            name = array[i].person.Name;
        }
    }
    return name;
};
console.log(OldestReader(array));
const Oldestbook = (array) => {
    let Title = array[1].favoriteBook.Title;
    let Year = array[1].favoriteBook.Year;
    for (let i = 0; i < array.length; i++) {
        if (array[i].favoriteBook.Year > Year) {
            Title = array[i].favoriteBook.Title;
            Year = array[i].favoriteBook.Year;
        }
    }
    return Title;
};
console.log(Oldestbook(array));
