// 原始数据类型
// 布尔值 boolean
var isBoolean = false;
// 数值 number
var isNumber = 6;
// 字符串 string
var myName = 'linzhiqiang';
var myAge = 123;
console.log("my name is" + myName + ",my age is" + myAge);
// 空值 JavaScript没有空值（void）的概念，typescript中 void 标识空值
function callName() {
    console.log('myname', myName);
}
var unusable;
unusable = undefined;
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
var void_name = undefined;
void_name = null;
// null和undefined
var u = undefined;
var n = null;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
var num = u;
