var cars = ["Saab","Volvo","BMW"];
// // console.log(cars);  // 数组
// console.log(cars.length);  //输出数组长度


// var cars = new Array("Saab","Volvo","BMW");
console.log(cars); // 效果与上一种相同，建议使用上一种， 用数组名访问整个数组

var name = cars[0];
console.log(name); //通过下标号来索引某个元素

cars[0] = "acc";
console.log(cars);// 通过下标直接修改元素

cars.push("zhu");// 在末尾添加元素
console.log(cars);

cars[cars.length] = "yong "; // 使用length属性向数组添加新元素
console.log(cars);


//对象与数组的区别

    // 数组使用数字索引
    // 对象使用命名索引


//javaScript     toString()把数组转化为数组值（逗号分隔开）的字符串
console.log(cars.toString());

//join 将所有数组元素结合为一个字符串

console.log(cars.join("_"));

//pop 删除数组中最后一个元素      Popping 和 Pushing 指的是： 从数组弹出项目，或向数组推入项目

cars.pop();  //删除最后一个元素
console.log(cars);


var a = cars.pop()  //最后一个元素存储在a中
console.log(a); 

// shift() 删除首个数组元素，并把所有其他元素“位移”到更低的索引

cars.shift();  //删除首元素
console.log(cars);

console.log(cars.shift());  //返回最后一个元素

//unshift()  在数组首位添加新元素

cars.unshift("aaaaas");
console.log(cars);

// splice() 方法可用于向数组添加新项

cars.splice(2,0,"love","you");  // 2: 定义应添加新元素的位置    0： 定义应删除元素的个数   其余参数：定义要添加的元素
console.log(cars);

// concat() 合并现有的数组来创建一个新数组

var color =["red","blue","black","yellow"];
var B = color.concat(cars); // 两个数组合并    三个数组合并    var3.concat(var1,var2);
console.log(B);

//slice  裁剪数组

var A = B.slice(1);  //用slice()创建新数组，他不会从原数组中删除任何元素
console.log(A);

// toString() 如果需要原始值，则JavaScript会自动把数组转化为字符串。     


// 所有的JavaScript对象都拥有toString()方法