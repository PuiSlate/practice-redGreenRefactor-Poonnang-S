//green phase code:
//function counter(str){
//  let vowelCount = 0;
//  let vowels = "aeiou";

//  go through each character in str
//  for (let i = 0; i < str.length; i++) {
//  lowercase to normalize str
//  const char = str[i].toLowerCase();
//check char against vowels
//  if(vowels.includes(char)) {
//  vowelCount++;
//  }
// }


//must return vowels count or test fails
// return vowelCount;

function countVowels(str){

    const vowels = "aeiou";
    return str 
    .toLowerCase() 
    .split('')
    .filter(char => vowels.includes(char)) 
    .length;  
      
    
}

module.exports = countVowels;

//Refactor notes
//Core steps:
//define vowels
//loops through each character
//normalize to lowercase
//increase counter
//return counter

//Ideas to refactor:
//remove loop, use automatic iteration - helper function - .split() & .filter()
//create new counter to account for removal of loop
// normalize entire string at once to account for removal of loop
// use.length to return number instead of array, satisfying the test