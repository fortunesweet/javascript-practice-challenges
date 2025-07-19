function hasDuplicate(nums) {
  const seen = new set();

  for (let nume of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

console.log(hasDuplicate([1, 2, 3, 1]));
console.log(hasDuplicate([1, 2, 3, 4]));
