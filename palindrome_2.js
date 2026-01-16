// Given a string s, return true if it can become a palindrome after deleting at most one character.

// Example:
// Input: "abca"  
// Output: true


function validPalindrome(input) {
    const cleaned = input.replace(/[^a-z0-9]/gi, '').toLowerCase();

    if (cleaned.length < 1) {
        return false;
    } else {
        
        let left = 0;
        let right = cleaned.length - 1;

        while (left < right) {

            if (cleaned[left] !== cleaned[right]) {
            
                let skipLeft = cleaned.slice(0, left) + cleaned.slice(left + 1);
                let skipRight = cleaned.slice(0, right) + cleaned.slice(right + 1);

                return (
                    skipLeft === skipLeft.split('').reverse().join('') || skipRight === skipRight.split('').reverse().join('')
                );

            }

            left++;
            right--;
        }

        return true;
    }
}

const input = "absdsdca";

const result = validPalindrome(input);

console.log(result);