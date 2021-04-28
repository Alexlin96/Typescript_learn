// 枚举
// 枚举使用enum关键字来定义

enum Days { first, seconed, three }
// 枚举成员会被赋值为从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射

console.log(Days['first'] === 0)
