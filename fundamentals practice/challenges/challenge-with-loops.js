"use strict";

const routine = ["wakeup", "code", "read", "practice", "write", "sleep"];
const days = 365;
for (let i = 0; i < days; i++) {
  console.log(`Inaiku day ${i + 1} scratch la erundhu aarambikuren`);
  for (let i = 0; i < routine.length; i++) {
    console.log(`doing routine ${i + 1} that is ${routine[i]}`);
  }
}
