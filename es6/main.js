// 这里是有关于 ES6 文章里的第25章节编程风格
// 记录部分我应该养成却没做到的习惯

const http = require('http')

http.createServer((req, res) => 

    res.end()
).listen(8080)

let arr = [
    {
        id: 1,
        name: 'aaa'
    },
    {
        id: 2,
        name: 'xxx'
    },
]

let arr2 = [], arr3 = []

arr.forEach(v => {
    arr2.push(v.name)
})

arr3 = [...arr];

console.log(arr2, arr3)

/**
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
 */

/** (我经常这样写。。)
 所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。

// bad
function divide(a, b, option = false ) {
}

// good
function divide(a, b, { option = false } = {}) {
}
 */