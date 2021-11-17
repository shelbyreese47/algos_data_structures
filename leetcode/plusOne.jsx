var plusOne = function(digits) {
    let len =digits.toString().replace(/,/g, '').length;
    console.log(len)
    if (len < 16){
    let parsed = Number(digits.toString().replace(/,/g, '')) + 1; 
    console.log(parsed)
    let separated = parsed.toString().split('')
    return separated;
    } else {
        let first = digits.slice(0, len/2);
        console.log(first)
        console.log(digits)
        let firstParsed = Number(first.toString().replace(/,/g, ''));
        console.log(firstParsed)
        let parsed = Number(digits.toString().replace(/,/g, '')) + 1; 
        console.log(parsed)
    //     let together = firstParsed.concat(parsed);
    //     let separated = together.toString().split('')
    //     return separated;
    }

};


console.log(plusOne([4,3,2,1]))
console.log(plusOne([[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,5]]))