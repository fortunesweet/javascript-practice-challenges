function capitalizeEachWord(sentence) {
  const words = sentence.split("");
  let capitalizeWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizeWords.push(capitalized);
  }

  const result = capitalizeWords.join("");
  return result;
}

// my name
const input = "genowere fortune";
const output = capitalizeEachWord(input);
console.log(output);
