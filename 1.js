// let sentence = "   India is my country i love india so much       ";
// console.log(sentence);
// const a = sentence.trim().split(' ')
// const len= a.length
// console.log(a);
// console.log(len);

// Problem : 01 : Find Longest Word

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  words = str.trim().split(" ");
//   words = words.sort((a, b) => b.length - a.length); // does sort always based on AASCII value
//   console.log(words);
//   return words[0];

// *Using reduce

return words.reduce((acccu,currword)=>{
    (currword.length > acccu.length ? currword : acccu)
     

})

}

console.log(
  findLongestWord("   India Is My Country I Love India So Much       ")
);

