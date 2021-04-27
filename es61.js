//ES6常用点

//变量声明(let && const)
// 注意：在ES5中var function 声明的全局变量都是顶级对象（window）的属性，而ES6中声明的全局变量不属于顶级对象的属性
// var a = 10;
// console.log(this.a)//10

let b = 10;
console.log(this.b)//undefined

// let 的使用
// ES6 新增了let命令，用来声明变量。它的用法类似于var。

// let 声明的变量只有在当前作用域有效
// 不存在变量提升
// 不允许重复声明
// 块级作用域
// 块级作用域：简单的理解就是 { } 一对花括号之间就是一个块级作用域，在这个块级作用域外是无法访问内部用 let 声明的变量

{
    let a1 = 10;
    var b1 = 10;
}
// console.log(a1)// ReferenceError: a is not defined.
console.log(b1)//10

let letArray = [1,2,3];
for(let i = 0;i < letArray.length;i++){}
// console.log(i)//ReferenceError
for(var i = 0;i < letArray.length;i++){}
console.log(i)//3

let fnArray = []
for(let i = 0;i < 3;i++){
    fnArray[i] = function(){
        console.log(i)
    }
}
fnArray[1]();//1
//for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
for(let i = 0;i < 3;i++){
    let i = 'abc';
    console.log(i)//abc
}


//暂时性死区
// 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
var tmp = 123;
if(true){
    // tmp = 'abc'//ReferenceError
    // let tmp;
}
// ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
// 凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

//const的使用
//const声明一个只读的常量。
//一旦声明，常量的值就不能改变。const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值
//如果 const 声明了一个对象，仅仅保证地址不变
//________________________________________________________________________________

//解构赋值

//数组解构
let [A,B,C] = [1,2,3]
console.log(A,B,C)//1,2,3
// ...rest这个写法是ES6中函数优化增加的rest参数，表示剩余的所有参数
let [head,...rest] = [1,2,3,4];
console.log(head,rest)
//解构默认值
let [a2=0,b2,c2] = [4,2,3]
console.log(a2)

//对象解构
let obj = {foo:'aaa',bar:'bbb'}
let {foo,bar} = obj;
console.log(foo)
//如果变量名和属性名不一致，必须写成下面这样
//也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
let {foo:fo,bar:ba} = obj;
console.log(fo,ba)
// console.log(foo,bar)//error: foo is not defined
//函数的参数也可以使用解构赋值
let sumArray = [[1,2],[3,4]].map(([a,b]) => {
    return a + b
})
console.log(sumArray)
//默认值生效的条件是，对象的属性值严格等于undefined。
let {x = 3,y} = {x:undefined,y:null}
console.log(x,y)//undefined
//利用赋值解构来交换变量
let fn1 = function(){
    let name = 'fn1'
    console.log(name)
};

let fn2 = function(){
    let name = 'fn2'
    console.log(name)
};


[fn1,fn2] = [fn2,fn1];
console.log(fn1,fn2)

// 解构赋值的用途
// 交换变量的值
// 从函数返回多个值
// 函数参数的定义
// 提取 JSON 数据
// 函数参数的默认值
// 遍历 Map 结构
// 输入模块的指定方法
//________________________________________________________





