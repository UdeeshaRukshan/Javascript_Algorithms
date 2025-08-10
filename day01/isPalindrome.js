const isPalindrome = (paragraph) => {
    let cleanedText = "";
    
    // Step 1: Clean the text (remove spaces, commas, and convert to lowercase)
    for (let i = 0; i < paragraph.length; i++) {
        const char = paragraph[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanedText += char;
        }
    }

    // Step 2: Check if it's a palindrome
    let left = 0;
    let right = cleanedText.length - 1;

    while (left < right) {
        if (cleanedText[left] !== cleanedText[right]) {
            console.log(cleanedText[left] + " is not a match with " + cleanedText[right]);
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, world!")); // false
