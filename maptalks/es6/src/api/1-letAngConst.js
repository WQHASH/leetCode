let letAngConst= 10;


//这里体现了 let的作用范围只在for循环的代码块内，局部的,虽然i=10了
//但是并不能进入循环体内，取到的值为（var的也是） 0-9 所以最后能得
//到的只能为9 而var中的是全局的当i=10的时候，这时循环体内的i也跟着改变了
{	
	var aa;
	for (let i = 0; i < 10; i++) {
		// console.log(i)
		aa = function(){console.log(i)};
	}
	// aa() // 9
}
{	
	var aa;
	for (var i = 0; i < 10; i++) {
		// console.log(i)
		aa = function(){console.log(i)};
	}
	// aa() //10
}
// console.log(a,b);



//===块级作用域===
{
	function func(arg){
		if(true){
			let arg = 1;
			function f(){console.log('I am inside!')};
			// let f = function(){console.log('I am inside!')};
		};
		// f();
		return arg;
	}
	// console.log(func(2),"func(2)");
}


// ======暂时性死区， 不存在变量提升 ======
// 只要块级作用域内存在let命令，它所声明的变量就 绑定这个区域，不再受外部影响
{
	let a = "sname";
	if(true){

		// console.log(a);   // 因为在if里存在let a 所以在let声明变量前，对a赋值会报错，它不会找外边的，暂时性死区原因
		// a = "sname---";
		// console.log(a);

		let a = "sage";
		// console.log(a);

	}

}
/**
 *  这里暂时性死区需要明白的要点
 *   ① 出了这么个特性是希望 在写的时候 先声明变量再去使用 (比较规范)	
 *   ② 每一层的{}都是一个作用域，只要外层这么写过{let} 那么这个变量就绑定了这整个范围了，
 *     不管内部再嵌套几层{},此时已经形成暂时性死区了 。
 */
{
		var sum = 999;
		function add(...values) {
		  for (var val of values) {
		  	let sum =0;
		    sum += val;
		  }
		   // console.log(sum,"sum")
		  let sum = 0;
		 
		  return sum;
		}

		// console.log(add(2, 5, 3)) // 10
}



// ======不允许重复声明 ======
/**
 * 这里如果是函数里有默认参数，方法体里也不能命名同名变量
 */
{
	function func(){
		let a = 1;
		// let a = 10;   //  不允许重复声明  否则保存
		return a;
	}
	// console.log(func())
}
export {letAngConst};