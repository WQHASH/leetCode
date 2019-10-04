/*
 * @Description: Promise.all实现
 * @Author: wangqi
 * @Date: 2019-09-30 16:01:14
 * @LastEditTime: 2019-10-04 12:07:49
 */


let everydayOneTitle80 = "第 89 题：设计并实现 Promise.race()";

{
    /****
     * 第 89 题：设计并实现 Promise.race()
     *     用法:   Promsie.race([p1, p2]).then((data)=>{})
     *          p1, p2谁先返回结果data就取谁的值,promise状态值也就是先返回的那个
     * !!!注意  参数不可以为空，至少要有一个
     */
    Promise.myRace = function (promiseArrs) {
        if (!Array.isArray(promiseArrs) || promiseArrs.length < 1) {
            return reject("不是一个数组对象或者长度为空")
        }
        return new Promise((resolve, reject) => {
            promiseArrs.forEach((val) => {
                Promise.resolve(val).then(resolve, reject)
            })
        })
    }

}

export {
    everydayOneTitle80
}