/*
 * @Description: Promise.all实现
 * @Author: wangqi
 * @Date: 2019-09-30 16:01:14
 * @LastEditTime: 2019-10-05 11:47:08
 */


let everydayOneTitle92 = "第 92 题：已知数据格式，实现一个函数 fn 找出链条中所有的父级 id";

{
    /****
     *      const value = '112'
     *      const fn = (value) => {...}
     *      fn(value) // 输出 [1， 11， 112] 
     *      
     *      let data = [{
     *          id: '1',
     *          name: "广东",
     *          children: [{
     *              id: '11',
     *              name: '深圳',
     *              children: [{
     *                  id: '111',
     *                  name: '南山区',
     *              },{
     *                  id: '112',
     *                  name: '福田区'
     *              }]
     *          }]
     *      }] 
     */

    let value = 112;
    let data = [{
        id: '1',
        name: "广东",
        children: [{
            id: '11',
            name: '深圳',
            children: [{
                id: '111',
                name: '南山区',
            }, {
                id: '112',
                name: '福田区'
            }]
        }],
    }]

    const fn = (data, value) => {
        let res = []
        const fnEx = (arr, temp = []) => {
            for (const node of arr) {
                if (node.id == value) {
                    res = [...temp, ...[node.id]]
                    return
                } else {
                    if (node.children) {
                        fnEx(node.children, [...temp, ...[node.id]])
                    }
                }
            }
        }
        fnEx(data)
        return res
    }
    // console.log(fn(data, value))
}

export {
    everydayOneTitle92
}