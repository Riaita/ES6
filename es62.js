//字符串
//模板字符串
//优点：
// 允许换行
// 可以使用插值 ${}
//字符串方法
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

//数组
// find 是 ES6 新增的语法
// find()  方法返回数组中满足提供的测试函数的第一个元素的值。否则返回  undefined。

// findIndex 是 ES6 新增的语法
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
let array = [2,3,4]
let item = array.find((value,index,obj)=>{
    console.log(value,index,obj)
    return value % 2 !== 0
})

let index = array.findIndex((value,index,obj)=>{
    console.log(value,index,obj)
    return value % 2 !== 0
})
console.log(item,index)
//函数
//箭头函数

//对象
//属性的简写
//方法的简写

//展开运算符
//展开一个数组
console.log(...array)
//展开一个对象
let obj = {
    name:'obj',
    age:12
}
let obj1 = {
    name:'obj1',
    age:13,
    id:12,
    key:'1'
}
let obj2 = {
    ...obj,
    ...obj1,
    name:'obj2',
    fn(){
        console.log("obj2")
    }
}
console.log(obj2)

//set对象
// Set类型和数组非常的像，  set中的数据不允许重复，Set集合的意思，集合中不允许有重复
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
arr = [...new Set(arr)]
console.log(arr)
// 接受一个数组，但是不会有重复的
const s = new Set(arr)
console.log([...s])

