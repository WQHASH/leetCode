let stringExtension = "字符串扩展";

// ===== 4. 字符串的遍历器接口 =====
{

	for(let val of "wang"){
		// console.log(val);
	}	

}


// ===== 6. includes(), startsWith(), endsWith()  =====
// 这里的n都只是从当前开始计算的 并不包括当前
{

	 let s ="wangqi";
	 // console.log(s.includes("n",3));
	 // console.log(s.startsWith("a"));
	 // console.log(s.endsWith("q",5));

}

// ===== 8. padStart()，padEnd()  =====
// ES2017 引入了字符串补全长度的功能。
// 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全
{
	let StringPadString = "12".padStart(10, 'YYYY-MM-DD');
	let StringPadString1 ="12.".padEnd(6,"00$");
	// console.log(StringPadString, "padStart");
	// console.log(StringPadString1, "padStart");
}

// ===== 11. 实例：模板编译  =====
{

}








export {stringExtension};