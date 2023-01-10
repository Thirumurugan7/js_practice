// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall

const BMIofThiru = {
  name: "thiru",
  weigth: 50,
  height: 130,
  calcBMI: function () {
    // const heigths = this.heigth ** 2;
    console.log(this.height);
    console.log(this.weigth);
    this.bmi = this.weigth / this.height ** 2;
    console.log(this.bmi);
    return this.bmi;
  },
};
const BMIoflevi = {
  name: "levi",
  weigth: 60,
  height: 160,
  calcBMI: function () {
    this.bmi = this.weigth / this.height ** 2;
    console.log(this.bmi);
    return this.bmi;
  },
};
console.log(
  `${BMIoflevi.name} have ${BMIoflevi.calcBMI()} which is ${
    BMIoflevi.calcBMI() > BMIofThiru.calcBMI() ? "greater" : "lesser"
  } than ${BMIofThiru.name}`
);
