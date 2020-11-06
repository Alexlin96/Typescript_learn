// 数组

// [类型+方括号] 表示法
let ageList:number[] = [23,24,25] // 数组的项中不允许出现其他类型的值
// ageList.push('123') 也不允许这样

// 数组泛型
let nameList:Array<string>= ['alex','jay','jjlin'] 

// 用接口表示数组
interface NumberArray{
    [index:number]:string
}
let nameLists:NumberArray = ['alex','jay','jjlin'] 

// 类数组
function sum() {
    let args:{
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// any在数组中的应用 
let list:any[] = ['alex',23] //数组的项可以是各种类型 






export {};