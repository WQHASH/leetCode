/*
 * @Description: 修改以下 print 函数，使之输出 0 到 99，或者 99 到 0
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-20 11:08:32
 */

let everydayOneTitle101 = "第 101 题: 修改以下 print 函数，使之输出 0 到 99，或者 99 到 0";

{
    /****
     * 
     * 要求：
     *  1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000) 的代码
     *  2、不能修改 Math.floor(Math.random() * 1000)
     *  3、不能使用全局变量
     */

    (function () {
        /**
         * @description: 通过自执行函数处理,(上来就执行了，暂不开了定时器内部原理)
         * @param {type} 
         * @return: 
         */
        function print(n) {
            setTimeout((() => {
                console.log(n);
            })(), Math.floor(Math.random() * 1000));
        }
        for (var i = 0; i < 100; i++) {
            // print(i);
        }
    })();

    /**
     * @description: 通过全局函数直接打印处理(原理同上)
     * @param {type} 
     * @return: 
     */
    (function () {
        function print(n) {
            setTimeout(console.log(99 - n), Math.floor(Math.random() * 1000));
        }
        for (var i = 0; i < 100; i++) {
            // print(i);
        }
    })();

    /**
     * @description: 通过定时器第三个参数处理
     * @param {type} 
     * @return: 
     */
    (function () {
        /****
         * 定时参数介绍
         * setTimeout(function [,  milliseconds, params])
         * function: 必需。 调用的一个函数
         * milliseconds: 可选。 等待的时间
         * params: 可选。 传给第一个函数的参数（IE9以前版本不支持）
         */
        function print(n) {
            setTimeout((...res) => {
                console.log(n, res)
            }, 1, Math.floor(Math.random() * 1000));
        }
        for (var i = 0; i < 100; i++) {
            // print(i);
        }
    })();


    /**
     * @description: 时间叠加思路; 耗时可能会比较长，性能较差
     * @param {type} 
     * @return: 
     */
    (function () {
        function print(n) {
            setTimeout(() => {
                setTimeout(() => {
                    console.log(n);
                }, 1000 * n);

            }, Math.floor(Math.random() * 1000));
        }
        for (var i = 0; i < 100; i++) {
            // print(i);
        }
    })();

}




export {
    everydayOneTitle101
}