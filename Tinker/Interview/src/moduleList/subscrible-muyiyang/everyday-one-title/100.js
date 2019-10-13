/*
 * @Description: 请写出如下代码的打印结果
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-13 11:48:33
 */

let everydayOneTitle100 = "第 100 题: 请写出如下代码的打印结果";

{
    /****
     * 
     */

    function Foo() {
        // 这里实际上在函数运行时，相当于在全局执行，在Foo挂载静态方法 (覆盖了最初定义的);
        Foo.a = function () {
            // console.log(1)
        }
        this.a = function () {
            // console.log(2)
        }
    }
    Foo.prototype.a = function () {
        // console.log(3)
    }
    Foo.a = function () {
        // console.log(4)
    }

    Foo.a();        // 4
    let obj = new Foo();    
    obj.a();    //  2
    Foo.a();    // 1  => 在new Foo()的时候 Foo.a 就修改了外部全局的Foo.a

}




export {
    everydayOneTitle100
}