// Given a string s, return true if it reads the same backward as forward, ignoring case and non-alphanumeric characters.

const input = "A man, a plan, a canal: Panama";
const input_2 = "race a car";

function isPalindropme(input) {

    const cleaned = input.replace(/[^a-z0-9]/gi, '').toLowerCase();

    if (cleaned.length < 1) {
        return false;
    } else {
        let left = 0;
        let right = cleaned.length - 1;

        while (left < right) {
            if (cleaned[left] !== cleaned[right]) return false;

            left++;
            right--;
        }

        return true;
    }

}

function easyPalindrome(input) {
    const cleaned = input.replace(/[^a-z0-9]/gi, '').toLowerCase();

    if (cleaned === cleaned.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }

}

const result = easyPalindrome(input);

console.log(result);


