function classifyArrayElements(arr) {
  const results = {
    evens: [],
    odds: [],
    chars: [],
  };

  arr.forEach((item) => {
    if (typeof item === "number" && Number.isInteger(item)) {
      if (item % 2 === 0) {
        result.evens.push(item);
      } else {
        result.odds.push(item);
      }
    } else if (typeof item === "string" && item.length === 1) {
      result.chars.push(item);
    }
  });

  result.evens.sort((a, b) => a - b);
  result.odds.sort((a, b) => a - b);
  result.chars.sort();

  return result;
}

const input = ["a", 4, 3, "b", 2.2, 5, "c", 6, 9.1];
console.log(classifyArrayElements(input));
