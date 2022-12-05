// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.88;
const johnWeight = 95;
const BMIofMark = markWeight / markHeight ** 2;

const BMIofJohn = johnWeight / johnHeight ** 2;

markHigherBMI = BMIofMark > BMIofJohn;

if (markHigherBMI) {
  console.log(
    `Mark's BMI ${BMIofMark.toFixed(
      2
    )} is higher than John's ${BMIofJohn.toFixed(2)}`
  );
} else {
  console.log(`Mark's BMI ${BMIofMark} is lower than John's ${BMIofJohn}`);
}
