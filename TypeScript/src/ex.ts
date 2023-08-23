let a = 3;
a = 77;
console.log("hello world !");
const bigNumber: (x: number, y: number) => number = (x, y) => {
  return Math.max(x, y);
};
const printBigNumber: (x: number, y: number) => void = (x, y) => {
  console.log(Math.max(x, y));
};
printBigNumber(3, 7);
const evenOrOdd: (num: number) => string = (num) => {
  if (num % 2 === 0) return "even";
  return "odd";
};
const stringLength: (str: string) => number = (str) => {
  return str.length;
};
const arrayOfNumbers: (num: number) => number[] = (num) => {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  return array;
};
const bigNumberFromArray: (arr: number[]) => number = (arr) => {
  return Math.max(...arr);
};
type person = {
  Name: string;
  Age: number;
  isStudent: boolean;
};
const person1: person = {
  Name: "erh",
  Age: 36859557886,
  isStudent: true,
};
const person2: person = {
  Name: "ethj6rrh",
  Age: 36466,
  isStudent: false,
};
const printPerson: (person: person) => void = (person) => {
  console.log(person.Name);
  let Age = person.Age;
  let isStudent = person.isStudent;
  console.log(Age.toString());
  console.log(isStudent.toString());
};
printPerson(person1);
const isMinor: (person: person) => boolean = (person) => {
  return person.Age < 18 ? true : false;
};
console.log(isMinor(person1));

interface Book {
  Title: string;
  Author: string;
  Year: number;
}
const book1: Book = {
  Title: "aaa",
  Author: "bbb",
  Year: 77,
};
const book2: Book = {
  Title: "aarega",
  Author: "brehbb",
  Year: 77456,
};
type Reader = {
  person: person;
  favoriteBook: Book;
};
const Reader1: Reader = {
  person: person1,
  favoriteBook: book1,
};
const Reader2: Reader = {
  person: person2,
  favoriteBook: book2,
};
const array = [Reader1, Reader2];
const OldestReader: (Reader: Reader[]) => string = (array) => {
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
const Oldestbook: (Reader: Reader[]) => void = (array) => {
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
