// 元组
// 数组合并了相同类型的对象，而元组合并了不同类型的对象

let tom:[string, number] = ['123', 456]
tom.push(456)
// tom.push(false) // 添加越界的元素 必须是联合类型中的类型
