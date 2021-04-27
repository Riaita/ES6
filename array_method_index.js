//ES5-数组的新方法

//forEach方法对数组的每个元素执行一次提供的函数。功能等同于for循环.
let eachArray = [1,2,3]
eachArray.forEach((value,index,array) => {
    console.log(value,index,array)
})

//map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。返回的数组的长度和原数组是一样的
let mapArray = [1,2,3];
let newMapArray = mapArray.map((value,index,array) =>{
    return value * value
})
console.log(newMapArray)

//filter用于过滤掉“不合格”的元素
//返回一个新数组，如果在回调函数中返回 true，那么就留下来，如果返回 false，就扔掉，因此返回的数组的长度和原数组的长度不一定一致
let filterArray = [1,2,3];
let newFilterArray = filterArray.filter((value,index,array) => {
    return value % 2 === 0;
})
console.log(newFilterArray)

// some用于遍历数组，如果有至少一个满足条件，就返回 true，否则返回 false。
//同样的每一个元素都会执行一遍 function，相当于最后返回的结果进行了一个 ||运算，全为 false 才是 false
let someArray = [1,2,3]
let someFlag = someArray.some((value,index,array) =>{
    console.log(value,index,array)
    return value > 3
})
console.log(someFlag)

// every用于遍历数组，只有当所有的元素返回 true，才返回 true，否则返回 false，
//每个元素执行完 function 返回的结果做一个 && 运算，全为 true 结果才是 true
let everyArray = [1,2,3];
let everyFlag = everyArray.every((value,index,array) => {
    console.log(value,index,array)
    return value < 4;
    // return value % 2 === 0;
})
//false
console.log(everyFlag)

//总结
// forEach: 作用：只会让每个元素执行一次函数， 没有别的功能 for 循环

// map: 作用：返回一个新的数组，长度和原数组一样 新数组会保存每次 function 返回的值

// filter: 作用：得到一个新数组， 保留哪些满足条件（返回 true）

// some: 作用：得到布尔值 只要有函数返回 true，整体结果就是 true

// every: 作用：得到布尔值，要所有的函数都返回 true，结果就是 true