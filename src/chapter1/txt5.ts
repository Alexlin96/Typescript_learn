// 函数的类型

// 约束声明 函数声明
function sum(x:number,y:number):number {  
    return x+y
}
// sum(1,2,3) 输入多余或者少于的参数 类型不一样 是不被允许的
sum(1,2)

// 函数表达式
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 用接口定义函数的形状
interface sumOption{
    ( x:number, y:number):number   
}

let alexSum:sumOption;
alexSum = (x:number,y:number)=>{
    return x+y
}

// 可选参数
function jaySum(x:number,y:number,z?:number) {
    return x+y
}
jaySum(1,2) // z是可选的

// 参数默认值
function jjSum(x:number = 12,y:number,z?:number){
    return x+y+z
}

// 剩余参数 rest
function linSum(x:number,...items){
    let sum:number;
    items.forEach(item=>{
        sum+=item
    })
    return sum + x;
}
linSum(1,2,3,4,5)

// 重载 允许一个函数接受不用数量或类型的参数是 做出不用的处理
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面


export {}











