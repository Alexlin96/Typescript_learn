// 类型断言 手动指定一个值的类型  <类型>值

// 将一个联合类型的变量指定为一个更加具体的类型
function getLenth(something:string|number) {
    return (<string>something).length  // 将something断言成string
}

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的



