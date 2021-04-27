//promise对象
// Promise 是异步编程的一种解决方案，所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
// 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息
// 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
// 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态

// 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
// 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

//有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

// 注1: Promise任然是一个异步操作，
// const p = new Promise(function(resolve,reject){
//     resolve('hello')
// });
// const p = Promise.resolve('hello')
// p.then(s => {
//     console.log(s)
// })
// console.log('11111')

// 注2：Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时

//
// setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出
setTimeout(function(){
    console.log("setTimeout")
},0)
const p1 = new Promise(resolve =>{
    console.log("resolve")
    resolve('resolve')
})
p1.then((msg) =>{
    console.log(msg,'then')
})
console.log("2222")

// Promise的基本使用
//基本语法
/*
	参数是两个函数
	调用resolve函数来将promise状态改成fulfilled，
	调用reject 函数将promise的状态改为rejected。
	如果在executor函数中抛出一个错误，那么该promise 状态为rejected
*/
const promise = new Promise((resolve, reject) => { 
    /* 常常是一些异步的操作 */ 
    if(true){
        resolve('success')
    }else{
        reject('error')
    }
})

// 这时候异步操作的结果就会存在promise这实例对象中
/*
	Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用
	（then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。	当Promise状态为fulfilled时，调用 then 的 onfulfilled 方法，
	当Promise状态为rejected时，调用 then 的 onrejected 方法）
*/
/*
	第一个回调函数是Promise对象的状态变为resolved时调用，
	第二个回调函数是Promise对象的状态变为rejected时调用。
	第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。	
*/
promise.then(function(result){
    // 执行fulfilled状态的
},function(err){
    // 执行rejected状态的
})
// 调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。reject函数的参数通常是Error对象的实例，表示抛出的错误；
// resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例，比如像下面这样
const p3 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        // reject(new Error('fail'))
        resolve('success')
    },3000)
})
const p4 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve(p3)
    },3000)
})
p4
.then(result => {console.log(result)})
.catch(error =>{console.log(error)})