/*
 * @Description: Promise.all实现
 * @Author: wangqi
 * @Date: 2019-09-30 16:01:14
 * @LastEditTime: 2019-10-04 11:58:31
 */


let everydayOneTitle80 = "第 80 题：介绍下 Promise.all 使用、原理实现及错误处理";

{
    /****
     * 第 80 题：介绍下 Promise.all 使用、原理实现及错误处理
     *      用法:  Promsie.all([p1, p2]).then((data)=>{})
     *          p1, p2应是peomise实例对象，如果不是则会通过promsie.resolve转成其实例对象
     *          data返回的数据也是p1, p2结合返回的数组对象
     * !!!注意参数可以为空
     */
    Promise.myAll = function (promiseArrs) {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(promiseArrs)) {
                return reject("不是一个数组对象")
            }
            let arr = [];
            let i = 0;
            function handleData(index, data) {
                arr[index] = data;
                i++;
                if (i === promiseArrs.length) {
                    resolve(arr)
                }
            }
            for (let i = 0; i < promiseArrs.length; i++) {
                Promise.resolve(promiseArrs[i]).then((data) => {
                    handleData(i, data)
                }, reject)
            }
        })
    }
 
    let p1 = Promise.resolve("我是");
    let p2 = Promise.resolve("一个");
    let p3 = Promise.resolve("好人");
    let p4 = Promise.reject('坏人');
    
    let newP = Promise.myAll([p1, p2, p4]);
    newP.then((data) => {
        console.log(data, "data")
    }).catch((err) => {
        console.log(err, "err")
    })
}

export {
    everydayOneTitle80
}