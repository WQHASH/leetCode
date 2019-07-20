let everydayOneTitle84 = "第 84 题：请实现一个 add 函数，满足以下功能 ";

{
    /****
     * 第 84 题：请实现一个 add 函数
     *          add(1); 	    // 1
     *          add(1)(2);  	// 3
     *          add(1)(2)(3)；  // 6
     *          add(1)(2, 3);   // 6
     *          add(1, 2)(3);   // 6
     *          add(1, 2, 3);   // 6
     */


    function add() {
        let args = [].slice.call(arguments);
        let fn = function () {
            let fn_args = [].slice.call(arguments)
            return add.apply(null, args.concat(fn_args))
        }
        // 因为 toString方法会自动执行; 比如在 alert({}) 是个对象是其实也调用了toString 
        fn.toString = function () {
            return args.reduce((a, b) => a + b)
        }
        return fn
    }

    let addSum = add(1, 2);
    console.log(addSum);

}


export {
    everydayOneTitle84
}