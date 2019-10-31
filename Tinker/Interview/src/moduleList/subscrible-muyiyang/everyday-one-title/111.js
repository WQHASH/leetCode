/*
 * @Description: 编程题，写个程序把 entry 转换成如下对象
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-31 21:53:44
 */

let everydayOneTitle111 = "第 111 题: 编程题，写个程序把 entry 转换成如下对象";

{
    /****
     *   编程题，写个程序把 entry 转换成如下对象
     *     思路: 这里的重点在于对keyName的拼接，其实每次的result都是一个新对象不过这不是重点 [它只是个容器]
     *          
     */

    // var entry = {
    //     a: {
    //         b: {
    //             c: {
    //                 dd: 'abcdd'
    //             }
    //         },
    //         d: {
    //             xx: 'adxx'
    //         },
    //         e: 'ae'
    //     }
    // }

    // // 要求转换成如下对象
    // var output = {
    //     'a.b.c.dd': 'abcdd',
    //     'a.d.xx': 'adxx',
    //     'a.e': 'ae'
    // }





    var entry = {
        a: {
            b: {
                c: {
                    dd: 'abcdd'
                }
            },
            d: {
                xx: 'adxx'
            },
            e: 'ae'
        },
    }

    function parseObj(obj, parentKey = '', result = {}) {
        for (const key in obj) { 
            if(obj.hasOwnProperty(key)) {
                let keyName = `${parentKey}${key}`;
                if(typeof obj[key] === 'object') {
                    parseObj(obj[key], keyName+".", result)
                }else{
                    result[keyName] = obj[key];
                }
            }
        }
        return result;

    };

    // console.log(parseObj(entry))

}









export {
    everydayOneTitle111
}