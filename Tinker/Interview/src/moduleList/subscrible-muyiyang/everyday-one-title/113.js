/*
 * @Description: 编程题，根据以下要求，写一个数组去重函数（蘑菇街）
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-31 22:08:48
 */

let everydayOneTitle113 = "第 113 题: 编程题，根据以下要求，写一个数组去重函数（蘑菇街）";

{
    /****
     *   编程题，根据以下要求，写一个数组去重函数（蘑菇街）
     *     1. 如传入的数组元素为[123, "meili", "123", "mogu", 123]，则输出：[123, "meili", "123", "mogu"]
     *     2. 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
     *     3. 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]，则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
     *          
     */


    function arrRemoval(arr) {
        let res = [];
        arr.forEach((value) => {
            if (res.length === 0) {
                res.push(value);
            } else {
                for (let i = 0; i <= res.length; i++) {
                    if (JSON.stringify(res[i]) === JSON.stringify(value)) { break };
                    if (i === res.length - 1) {
                        res.push(value)
                    };
                }
            }
        })
        return res;
    }

    let arr0 = [123, "meili", "123", "mogu", 123];
    let arr1 = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"];
    // console.log(arrRemoval(arr1))




}









export {
    everydayOneTitle113
}