let variableDeconstruction = [];


// ===== 1. 数组的解构赋值 =====
//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
//模式匹配 数组左右两边都要是形同的结构模式

{
	let [x = 11] = [void 0];
	let [xx = 11] = [null]; //这里如果能取到默认值，前提赋的值 全等于 undefined
	//console.log(x); // 11
	//console.log(xx); // 11
}


// ===== 2. 对象的解构赋值 =====

{
	let {foo, bar} = {foo:"sname", bar:"sage"};
	//console.log(foo, bar); // sname, sage
	//对象解构和数组不同的是，数组是按次序的，对象是无序的，但是变量必须与属性同名，
	// 如果变量民和属性名不一致，按下面写法  （对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。）

	//foo是匹配的模式，foo1才是变量。真正被赋值的是变量foo1，而不是模式foo。 => ====模式不能是表达式用于计算取值
	let {foo:foo1, baz} = {foo:"sname", bar:"sage"};
	//console.log(foo1, baz); // sname, sage
}



{	// => =====模式不能是表达式用于计算取值
	// 对象的解构也可以指定默认值。
	var {x: y = 3} = {};
	// var {x: y = 3} = {x: undefined};
	// console.log(y) // 3
	let {foo} = {bar: 'baz'};
	// console.log(foo)  // undefined   注意和数组对比的情况，数组的是有序的所以有变量，没属性那么直接为undefined
}

{
	let arr = [1, 2, 3];  //  {"0":1, "1":3, "2":3}
	//let {0 : first, arr[2] : last} = arr; 	//错误示例 arr[2]是模式不能是表达式，last可以是
	let {0 : first, [2] : last} = arr;
	// console.log(first, last)  // 1, 3
}


// ===== 2. 字符串的解构赋值 ===== 
{
	const [a, b, c, d, e ] = "hello";
	// 这里只能用对象的处理方式来处理，因为length的键名不是随number递增的
	const {length} = "hello"; 
	// console.log(a, b, c, d, e, length );  // h,e,l,l,o,5
}


// ===== 5. 函数参数的解构赋值 ===== 
{

	// 函数add的参数表面上是一个数组，
	// 但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
	function add([x,y],{sname, sage}){
		return x+y + "=="+sname+`==`+sage;
	};

	// console.log(add([1,2],{"sname":"wang","sage":"12"}));
}



//  ===== 5. 不能使用圆括号的情况 ===== 
{
	// ******1.变量声明语句, 模式不能使用圆括号 (变量声明的都不要用（）)
	// 2. 函数的参数也属于变量声明，
	// 3. 赋值语句的模式不合理


	// let [(a)] = [];
	// let {x: (c)} = {};				// 变量声明语句
	// function f([(z)]) { return z; } 	//函数的参数
	// ([a]) = [5];						// 赋值语句的模式不合理

	// ===== 能使用圆括号的情况 =====
	let b;
	// [(b)] = [3];			//重点他们都不属于变量声明的方式
	// console.log(b)   // 3
	// [(parseInt.prop)] = [3];
}

export {variableDeconstruction}