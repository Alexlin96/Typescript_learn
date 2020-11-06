// 声明文件
// 声明文件必需以.d.ts为后缀

// declare var 全局变量声明
declare let jQerys:(selector: string) => any;

// declare function 声明全局函数
declare function jQuery(selector: string): any;

// declare class 全局声明类
declare class Animal {
    name:string
    constructor(name:string)
}

// declare enum 外部枚举

// declare namespace 命名空间 用来表示全局变量是一个对象，包含很多子属性
declare namespace lzq {
    const name : string
}


export {}