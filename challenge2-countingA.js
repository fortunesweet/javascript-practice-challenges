const sentence = "Javascript is amazing";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];

  if (letter === "a") {
    count = count + 1;
  }
}

console.log(count);
