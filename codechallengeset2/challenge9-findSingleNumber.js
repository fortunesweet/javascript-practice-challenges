function findSngleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

const nums = [3, 2, 3, 2, 1];
console.log(findSingleNumber(nums));
