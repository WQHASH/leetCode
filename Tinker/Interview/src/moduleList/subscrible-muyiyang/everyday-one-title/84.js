let everydayOneTitle84 = "第 84 题：请实现一个 add 函数，满足以下功能";

{
    /****
     * 第 81 题：请实现一个 add 函数，满足以下功能
     *          add(1); 	    // 1
     *          add(1)(2);  	// 3
     *          add(1)(2)(3)；  // 6
     * 
     *          add(1)(2, 3);   // 6
     *          add(1, 2)(3);   // 6
     *          add(1, 2, 3);   // 6
     * 
     */


}
{
    function add(...a) {
        let sum = a.reduce((p, n) => p + n);
        function next(...b) {
            let _sum = b.reduce((p, n) => p + n);
            sum = sum + _sum;
            return next;
        }
        //Function.toString该方法在需要转换为字符串时，通常会自动调用函数的 toString 方法。
        next.toString = function () {
            return sum;
        };
        return next;
    }
    // let fun = add(1, 2)(3);
    add(1, 2);
    // console.log(add(1, 2),"add");
    // console.log(fun)
}

export {
    everydayOneTitle84
}