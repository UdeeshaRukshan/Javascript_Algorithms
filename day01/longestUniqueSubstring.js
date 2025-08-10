const longestUniqueSubstring=(text)=>{
const characters=new Set();
let max=0;

for(let i=0;i<text.length;i++){
    characters.add(text[i]);
    max=characters.size
}
console.log(max)
}
longestUniqueSubstring("abcabcbb"); // Output: 3 ("abc")
longestUniqueSubstring("bbbbb");   // Output: 1 ("b")
longestUniqueSubstring("pwwkew");  // Output: 3 ("wke")
longestUniqueSubstring("");        // Output: 0
