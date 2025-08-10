function result(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const out = result("Hello World This Is Udeesha Rukshan Gamage!");
  console.log(out);  // Output: number of vowels
  
