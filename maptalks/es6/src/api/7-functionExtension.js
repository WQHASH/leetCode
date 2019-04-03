let functionExtension = "函数扩展";

// ===== 2. 函数的 length 属性 =====
/**
 * 函数的length属性，指的是函数没有默认赋值的参数，那些已经有默认值的将不会计算在length中。
 * **如果默认参数不是为参数，length也不会再计算赋值后面的参数
 */
{
	function fun(a,b,c="c"){};
	function fun1(a="a",b,c){};
	let len = fun.length;
	let len1 = fun1.length;
	// console.log(len,"len")
	// console.log(len1,"len1")

}




// ===== 2. 作用域 =====
{
	var x = 1;
	function foo(x=x){}; 
	// foo();  //这里的参数相当于，let x = x他会形成暂时性死区，报x未定义

}
/**
 * 下面2个例子都体现了，当函数参数有默认值时候，
 * 	参数部分会单独形成以个作用域，方法体又是一个作用域，函数外又是一个全局作用域
 *  还是遵守爬树原则，方法体 -> 参数部分 -> 函数外(全局)
 * 
 */
{
	var x =1;
	function foo(x, y= function(){x=2; console.log(x,"匿名")}){
		var x=3;
		y();
		console.log(x);
	}; 
	// foo();		//3
	// console.log(x,"x") //1
}

{
	var x=1;
	function foo(x, y=function(){x=2; console.log(x,"匿名")}){
		x=3;
		y();
		console.log(x);
	};
	//foo();	// 2
	//console.log(x,"x") //1
}






export {functionExtension};