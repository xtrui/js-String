// function1
function reverseString(message){
    // wirte your code here
    return message.split('').reverse().join('');
  }
 console.log(reverseString('hello')); // should return 'olleh'

// function2
function palindrome(message){
    // wirte your code here
    return message === reverseString(message);
  }
 console.log(palindrome('hello')); // should return false
 console.log(palindrome('abcba')); // should return true

 //function 3
 function alphabetSort(message){
    // wirte your code here
    var compare = function (x, y) {
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    }
    return message.split('').sort(compare).join('');
  }
  console.log(alphabetSort('hello')); // should return 'ehllo'

  //function4
  function countWords(message){
    // wirte your code here
    return message.split(" ").length;
  }
  console.log(countWords('Good morning, I love JavaScript.')); // should return 5