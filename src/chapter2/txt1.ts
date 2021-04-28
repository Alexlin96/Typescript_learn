// 类型别名
// type创建类型别名
type Name = string
type Num = number
type NameOrNum = Name | Num
function sayName(a: NameOrNum) { // 类型别名常用于联合类型
  return a
}

// 字符串字面量类型
type EventType = 'click' | 'push' | 'add'
function handleEvent(e:EventType) {
  console.log(e)
}
handleEvent('push') // 只能传其中一种字符串
