// any 任意值

// 如果变量是一个普通类型，在赋值的过程中改变类型是不被允许的
let myName:string = 'linzhiqiang'
//myName = 7;  //这里会报错 不能把7赋给string类型

// any类型 允许被赋值为任意类型
let myage:any = '23';
myage = 24;  // 不会报错

// 任意值的属性和方法
// 在任意值上访问任何属性都是允许的
let anyThing:any = 'hello ts'
console.log(anyThing.myName);
//也可以调用任何方法
anyThing.callName('alex')
// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

// 未声明类型的变量
// 变量如果在声明的时候 未指定其类型 则会被识别为任意值类型（any）
let someTing ;

// 类型推论
let myNames = 'name' // 这里会推断成一个string类型 相当于自动加上去
let myages; // 这里是any类型 只要不赋值 只声明的是any

// 联合类型 (表示取值可以为多种类型中的一种) | 
let mybook:string|number = 'java';
mybook = 12;

// 访问联合类型的属性或方法 只能访问共有的 不然会报错
// console.log(mybook.length) 
function getString(book:string | number):string{
    return book.toString();
}
getString(mybook)

// 联合类型的变量在被赋值的时候，会根据类型推论的规则判断出一个类型
let myFavoriteNumber:string|number;
myFavoriteNumber = '88'
console.log(myFavoriteNumber.length);
myFavoriteNumber = 88
// console.log(myFavoriteNumber.length); // 编译报错 此时是number类型 没有长度这个属性

export {};








