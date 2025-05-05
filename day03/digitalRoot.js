function digitalRoot(num) {
  while (num >= 10) {
    num = Array.from(String(num), Number).reduce((a, b) => a + b, 0);
  }
  return num;
}

console.log(digitalRoot(9878)); // Output: 5 (9+8+7+8 = 32, then 3+2 = 5)
