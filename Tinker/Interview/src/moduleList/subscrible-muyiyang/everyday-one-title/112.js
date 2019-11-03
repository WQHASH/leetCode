/*
 * @Description: 编程题，写个程序把 entry 转换成如下对象（跟昨日题目相反）
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-11-03 09:22:48
 */

let everydayOneTitle112 = "第 112 题: 编程题，写个程序把 entry 转换成如下对象（跟昨日题目相反）";

{
    /****
     *   编程题，写个程序把 entry 转换成如下对象（跟昨日题目相反）
     *          这里是借鉴被人的思路:
     *              遍历对象，如果键名称含有 . 将最后一个子键拿出来;
     *              构成对象，如 {'a.b.c.dd': 'abcdd'} 变为 {'a.b.c': { dd: 'abcdd' }};
     *              如果变换后的新父键名中仍还有点，递归进行以上操作即可;
     */

    var entry = {
        'a.b.c.dd': 'abcdd',
        'a.d.xx': 'adxx',
        'a.e': 'ae'
    }

    // 要求转换成如下对象
    // var output = {
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







    function nested(obj) {
        Object.keys(obj).map(k => {
            getNested(k);
        });

        return obj;

        function getNested(key) {
            const idx = key.lastIndexOf('.');
            const value = obj[key];
            if (idx !== -1) {
                delete obj[key];
                const mainKey = key.substring(0, idx);
                const subKey = key.substr(idx + 1);
                if (obj[mainKey] === undefined) {
                    obj[mainKey] = {
                        [subKey]: value
                    };
                } else {
                    obj[mainKey][subKey] = value;
                }
                if (/\./.test(mainKey)) {
                    getNested(mainKey);
                }
            }
        }
    }

    // console.log(nested(entry))

}









export {
    everydayOneTitle112
}