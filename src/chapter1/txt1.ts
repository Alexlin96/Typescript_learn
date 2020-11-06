// 原始数据类型

// 布尔值 boolean
let isBoolean:boolean = false;

// 数值 number
let isNumber:number = 6;

// 字符串 string
let myName:string = 'linzhiqiang';
let myAge:number = 123;
console.log(`my name is${myName},my age is${myAge}`);

// 空值 JavaScript没有空值（void）的概念，typescript中 void 标识空值
function callName():void{
    console.log('myname',myName)
}
let unusable:void;
unusable = undefined

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let void_name:void = undefined;
void_name = null;

// null和undefined
let u:undefined = undefined;
let n:null = null;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let num:number = u;

// viod类型的变量不能赋值给number类型的变量
// let nums:number = void_name; //会报错

export {};  // 在 Typescript 中，只要文件存在 import 或 export 关键字，都被视为 module 锁定住 这样就不会出现全局变量重名 
