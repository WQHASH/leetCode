/*
 * @Description: 深拷贝
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-08 22:15:38
 */

let everydayOneTitle95 = "第 95 题: 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况";

{
    /****
     *  模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况
     * 
     *  思路: 
     *      如果按以前的拷贝套路, 那么Symbol作为key的话将无法拷贝进去
     */

    function deepClone(obj) {
        function objTypeOf(obj) {
            return Object.prototype.toString.call(obj).slice(8, -1);
        }

        let type = objTypeOf(obj);
        let result;
        if (type === 'Object') {
            result = {};
            for (var key in obj) {
                result[key] = deepClone(obj[key])
            }
        } else if (type === 'Array') {
            result = [];
            for (var i = 0; i < obj.length; i++) {
                result.push(deepClone(obj[i]));
            }
        } else {
            return obj
        }
        return result

    }


    let obj = {
        sname: 'wangqi',
        sage: 12,
        hobby: {
            as: 'music'
        },
        [Symbol('123')]: '123',
    }
    let newObj = deepClone(obj);
    newObj.ss = "sss";
    newObj.sname = "wq";
    newObj.sage = 11111;
    newObj.hobby = { gg: "凉凉" };

    // console.log(obj, 'obj');
    // console.log(newObj, 'newObj');


}


{
    /**
     * @description: 处理Symbol的深克隆方法
     * @param {type} 
     * @return: 
     */
    function deepCopy(target, cache = new Set()) {
        if (typeof target !== 'object' || cache.has(target)) {
            return target
        }
        if (Array.isArray(target)) {
            target.map(t => {
                cache.add(t)
                return t
            })
        } else {
            return [...Object.keys(target), ...Object.getOwnPropertySymbols(target)].reduce((res, key) => {
                cache.add(target[key])
                res[key] = deepCopy(target[key], cache)
                return res
            }, target.constructor !== Object ? Object.create(target.constructor.prototype) : {})
        }
    }
    
}
export {
    everydayOneTitle95
}