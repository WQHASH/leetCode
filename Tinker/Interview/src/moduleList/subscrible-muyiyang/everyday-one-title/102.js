/*
 * @Description: 不用加减乘除运算符，求整数的7倍
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-20 15:17:42
 */

let everydayOneTitle102 = "第 102 题: 不用加减乘除运算符，求整数的7倍";

{
    /****
     *   不用加减乘除运算符，求整数的7倍
     *      思路:
     *          
     */

    (function () {
        function fun(x) {
            let arr = Array.of(x)
            let resultArr = [...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr]
            return resultArr.length
        }
        // console.log(fun(1), "fun");

    })();

    (function () {  
        const sevenTimes = num => eval(new Array(7).fill(num).join('+'))
        // console.log(sevenTimes(1), "sevenTimes");
    })();



}




export {
    everydayOneTitle102
}