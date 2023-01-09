"use strict";

function anime() {
  console.log("tatakye");
}

for (var i = 0; i < 5; i++) {
  anime();
}
anime();

function favChar(char1, char2) {
  console.log(char1, char2);
  const fav = `my first fav char ${char1} and my second fav char ${char2}`;
  // console.log(fav);
  return fav;
}

console.log(favChar("anine", "mikasa") + " What the hell");
console.log(favChar("levi", "eren"));
