const countVowels = require('../countvowels.js');

let str = "hello";

describe("countVowels", ()=>{
    //failing case
    test("count vowels in string", () => {
        expect(countVowels("hello")).toBe(2);
    });

});
