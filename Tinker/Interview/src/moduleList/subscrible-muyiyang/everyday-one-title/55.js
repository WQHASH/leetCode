let everydayOneTitle55 = "类似对象转数组的问题";

/****
 * 第 55 题：某公司 1 到 12 月份的销售额存在一个对象里面，如下：{1:222, 2:123, 5:888}
 * 请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
 * 
 */

{
    function arrToObject(obj) {
        let arr = [];
        for (let i = 0; i < 12; i++) {
            arr.push(null)
            for (let key in obj) {
                if (key == (i + 1)) {
                    arr.splice(i, 1, obj[key])
                }
            }
        }
        return arr;
    };
    let obj = { 1: 222, 2: 123, 5: 888 };
    // console.log(arrToObject(obj));

}

/**
 * 利用es6 Array.from({},()=>{}) 对象转数组的特性来处理
 */
{
    let obj = { 1: 222, 2: 123, 5: 888 };
    let arr = Array.from({ length: 12 }, (item, index) => {
        return obj[index + 1] || null;
    });
    // console.log(arr,"arr")
}

export { everydayOneTitle55 }