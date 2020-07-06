//number
for (let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i, " is even number.")
    }
    else {
        console.log(i, " is odd number.")
    }
}

//multiplication_table
let table = "";
for (let i = 1; i <= 9; i++) {
    
    for (let j = 1; j <= i; j++) {
        sum = i * j;
        table+=i+ "*"+ j+ "="+ sum+"   ";     // 使 "i" 和 "j" 能打印出来
    }
    table+="\n"
}
console.log(table);