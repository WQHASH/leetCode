let numberExtension = "数值的扩展";

// ===== 2. Number.isFinite(), Number.isNaN() =====
{
	// Number.isFinite()用来检查一个数值是否为有限的。 对于非数值一律返回false。
	// Number.isNaN()用来检查一个值是否为NaN。 只对NaN才返回true，其他一律返回false。
	// 和es中的比较，Number()将非数值的值转为数值，再进行判断，而这两个方法只对数值有效
	
	let a =Number.isFinite(15);
	let b =Number.isFinite(NaN);
	let c =Number.isFinite(Infinity);
	// console.log(a,b,c)
	let d =Number.isNaN(15);
	let e =Number.isNaN(NaN);
	let f =Number.isNaN(100/0); // 任何数除以0都为NaN
	// console.log(d,e,f)

	// Number.parseInt()  Number.parseFloat()   // 将全局的方法放到了这里，用法一致

	// 判断是否为整数
	// 第二个为true是因为 精度丢问题，(因为js的编码方式是双精度格式，转换成二进制时二进制位超过了限度，所以造成丢失)
	let j = Number.isInteger(25.111);
	let k = Number.isInteger(3.0000000000000002);
	// console.log(j,k)

}



export {numberExtension};