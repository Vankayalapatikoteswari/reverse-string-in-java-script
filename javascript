function reverseString(str) {
    // Split the string into an array of characters
    let charArray = str.split('');
    // Reverse the array
    let reversedArray = charArray.reverse();
    // Join the array back into a string
    let reversedString = reversedArray.join('');
    return reversedString;
}

// Example usage
let originalString = "Hello, World!";
let reversed = reverseString(originalString);
console.log(reversed); // Output: !dlroW ,olleH

