
// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
r1 = Object.prototype.toString.call(a);
r2 = Object.prototype.toString.call(b);
console.log(r1,r2)
// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log(a.map(e=>e*2));

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(" "));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join("+"));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(","));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var compare = function (x, y) {
    if (x < y) {
        return 1;
    } else if (x > y) {
        return -1;
    } else {
        return 0;
    }
}
console.log(a.sort(compare));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

let res = {};
  let maxName, maxNum = 0
  // 遍历数组
  a.forEach((item) => {
    res[item] ? res[item] += 1 : res[item] = 1
    if (res[item] > maxNum) {
      maxName = item
      maxNum = res[item]
    }
  })
  console.log(res);
  console.log(maxName);