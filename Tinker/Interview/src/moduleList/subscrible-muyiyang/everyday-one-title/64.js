/*
 * @Description: Promise.finally实现
 * @Author: wangqi
 * @Date: 2019-09-30 16:01:14
 * @LastEditTime: 2019-10-04 12:22:50
 */


let everydayOneTitle64 = "第 64 题：模拟实现一个Promise.finally";

{
    /****
     * 第 64 题：模拟实现一个Promise.finally
     *      
     *      思路:  主要的目的在于callBack执行一次，无其他的目的，
     *             所以通过一个新的Promsie执行完后通过then在返回 finally之前promise返回的结果 
     * 
     * 
     * finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果
     */

    Promise.prototype.myFinally = function (callback) {
        let P = this.constructor;
        return this.then(
            value => P.resolve(callback()).then(() => value),
            reason => P.resolve(callback()).then(() => { throw reason })
        );
    }


}

export {
    everydayOneTitle64
}