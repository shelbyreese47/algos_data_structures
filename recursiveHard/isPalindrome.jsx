// returns true if the word is the same forwards and backwards


function isPalinedrome(str) {
    
    function reverse(str){
        if (str.length <= 1) return str;
        return reverse(str.slice(1)) + str[0];
    }
    let reverseStr = reverse(str);
    if (reverseStr === str) return true;
    return false;
}

console.log(isPalinedrome('awesome')) //false
console.log(isPalinedrome('foobar')) //false
console.log(isPalinedrome('tacocat')) //true
console.log(isPalinedrome('amanaplanacanalpanama')) //true