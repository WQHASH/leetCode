/*
 * @Description: 编程算法题
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-13 11:37:27
 */

let everydayOneTitle99 = "第 99 题: 编程算法题";

{
    /****
     *  编程算法题
     *      用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符*串。
     *      如：输入整型 1234，返回字符串“4321”。
     *      要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
     */


    /**
     * @description: 正常非递归操作 
     * @param {type} 
     * @return: 
     */
    function strReverse(num) {
        return String(num).split("").reverse().join("")
    }

    let num = 1234;
    // console.log(strReverse(num));

}

{
    /**
     * @description: 每次都利用除法原理递归向左移动一位当做反转后的首位 
     * @param {type} 
     * @return: 
     */
    function fun(num) {
        let num1 = num / 10;
        let num2 = num % 10;
        if (num1 < 1) {
            return num;
        } else {
            num1 = Math.floor(num1)
            return `${num2}${fun(num1)}`
        }
    }
    var a = fun(12345)
    // console.log(a)
    // console.log(typeof a)
}



export {
    everydayOneTitle99
}