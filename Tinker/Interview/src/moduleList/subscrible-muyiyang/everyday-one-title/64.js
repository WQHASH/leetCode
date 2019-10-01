/*
 * @Description: Promise.finally实现
 * @Author: wangqi
 * @Date: 2019-09-30 16:01:14
 * @LastEditTime: 2019-10-01 10:05:29
 */


let everydayOneTitle64 = "第 64 题：模拟实现一个Promise.finally";

{
    /****
     * 第 64 题：模拟实现一个Promise.finally
     *      
     *      思路:
     */

    Promise.prototype.myFinally = function(callBack) {
        this.then((data) => {
            Promise.resolve(callBack()).then(()=>{ return data })
        }, (err) => {
            Promise.resolve(callBack()).then(() => { throw err })
        })
    }
    
}

export {
    everydayOneTitle64
}