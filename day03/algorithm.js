function letsSolveThis(nums, k) {
  const result = [];
  const n = nums.length;
  if (k <= 0 || k > n) return result;

  // Slide the window across the array
  for (let i = 0; i <= n - k; i++) {
    // Compute max within the current window [i, i + k - 1]
    let windowMax = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      if (nums[j] > windowMax) {
        windowMax = nums[j];
      }
    }
    result.push(windowMax);
  }

  return result;
}

// Example usage:
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(letsSolveThis(nums, k)); // Output: [3, 3, 5, 5, 6, 7]
