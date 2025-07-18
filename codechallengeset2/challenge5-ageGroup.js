const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const currentYear = new Date().getFullYear();

r1.question("Enter your year of birth: ", function (year) {
  const age = currentYear - parseInt(year);

  if (age < 18) {
    console.log("You are a minor.");
  } else if (age >= 18 && age <= 36) {
    console.log("You are a youth.");
  } else {
    console.log("You are an elder.");
  }

  r1.close();
});
