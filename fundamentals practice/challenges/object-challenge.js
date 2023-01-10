"use strict";

const student = {
  name: "thiru",
  age: 19,
  friends: ["vm", "nagi", "pd"],
};

console.log(student.name);
console.log(student["age"]);
console.log(
  `${student.name} has ${
    student.friends.length
  } friends and his mentor is ${student.friends.shift()}`
);
