// 函数的类型
// 约束声明 函数声明
function sum(x, y) {
    return x + y;
}
// sum(1,2,3) 输入多余或者少于的参数 类型不一样 是不被允许的
sum(1, 2);
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
var alexSum;
alexSum = function (x, y) {
    return x + y;
};
// 可选参数
function jaySum(x, y, z) {
    return x + y;
}
jaySum(1, 2); // z是可选的
// 参数默认值
function jjSum(x, y, z) {
    if (x === void 0) { x = 12; }
    return x + y + z;
}
// 剩余参数 rest
function linSum(x) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    var sum;
    items.forEach(function (item) {
        sum += item;
    });
    return sum + x;
}
linSum(1, 2, 3, 4, 5);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
