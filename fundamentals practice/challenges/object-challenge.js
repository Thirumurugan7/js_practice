"use strict";

const student = {
  name: "thiru",
  age: 19,
  friends: ["vm", "nagi", "pd"],
  loveTest: function (meter) {
    console.log("yethuku gopi  ithelam");
    return meter * 100;
  },
  loveTest1: function () {
    console.log("yethuku gopi  ithelam");
    return this.age * 100;
  },
  summary: function () {
    console.log(
      `${this.name} is ${this.age} years old and have ${
        this.friends.length
      } friends also ${
        this.friends[0]
      } is his mentor. After all his lovemeter is ${this.loveTest1()}`
    );
  },
};

console.log(student.name);
console.log(student["age"]);
console.log(
  `${student.name} has ${
    student.friends.length
  } friends and his mentor is ${student.friends.shift()}`
);

// student.lover = "mikasa";

// student.home = "tokyo";

// student["friends"] = ["mia", "dani"];
// console.log(student.loveTest(20));
// console.log(student["loveTest1"]());

console.log(student.summary());
