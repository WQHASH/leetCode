/*
 * @Description: 请写出如下代码的打印结果
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-23 22:25:57
 */

let everydayOneTitle108 = "第 108 题: 请写出如下代码的打印结果";

{
    /****
     *   请写出如下代码的打印结果
     *      执行流程:
     *          这里考察的是变量声明提前的问题， if中的var name会进行声明提前;
     *          所以在typeof name的时候为undefined; (全局的name是为Tom);
     * 
     *     注意的是如果使用块级作用域那就配置let来使用否则，这个作用域也就无意义!
     *      (()=>{})(); 自制行函数的作用域效果也就同上 [本身还是个函数]; 
     *      
     */

    var name = 'Tom';

    (function () {
        if (typeof name == 'undefined') {
            var name = 'Jack';
            // console.log('Goodbye ' + name);
        } else {
            // console.log('Hello ' + name);
        }
    })();

    //  输出: Goodbye Jack

}

{
    var name = 'Tom';

    (function () {
        if (typeof name == 'undefined') {
            name = 'Jack';
            // console.log('Goodbye ' + name);
        } else {
            // console.log('Hello ' + name);
        }
    })();

    //  输出: Hello Tom
}



// ****************** 注意的是如果使用块级作用域那就配置let来使用否则，这个作用域也就无意义! ****************** 
{
    { let insane = 'Hello World' }
    // console.log(insane)
}

export {
    everydayOneTitle108
}