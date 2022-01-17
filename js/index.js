// Iteration 1: Names and Input
let hacker1 = "Mamoun Lazrak";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Filipa Natalio";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters.`
  );
}
// Iteration 3: Loops
let driverNameInUpperCase = "";
for (letter of hacker1) {
  driverNameInUpperCase += letter.toUpperCase() + " ";
}
console.log(driverNameInUpperCase);
let navigatorReverseName = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  navigatorReverseName += hacker2[i];
}
console.log(navigatorReverseName);
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
