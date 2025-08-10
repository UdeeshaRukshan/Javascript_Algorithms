const str = "Hello";
for (const index in str) {
  console.log(index);       // 0, 1, 2, 3, 4
  console.log(str[index]);  // H, e, l, l, o
}
