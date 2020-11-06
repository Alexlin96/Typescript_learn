// 对象的类型--接口

// interface 定义对象的类型
// 可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述
interface Person{  // 接口对数据进行描述 定义了类型 接口一般首字母大写
    name:string;
    age:number;
    readonly id:number; // 只读属性
    sexe?:string; // 可选属性
    [propName: string]: any;  // 任意属性 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
}
let alex:Person = {  // 赋值的时候，变量的形状必须和接口的形状保持一致。
    id:110,
    name:'alex',
    age:23,
    sexe:'boy'
}
// 定义了一个接口 Person，接着定义了一个变量 alex，它的类型是 Person。这样约束了 alex 的形状必须和接口 Person 一致。


export {};




