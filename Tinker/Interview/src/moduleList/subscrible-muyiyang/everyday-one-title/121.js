/*
 * @Description: 第 121 题：统计 1 ~ n 整数中出现 1 的次数
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-11-10 11:11:44
 */

let everydayOneTitle121 = "第 121 题：统计 1 ~ n 整数中出现 1 的次数";

{
    /****
     *   第 121 题：统计 1 ~ n 整数中出现 1 的次数
     *          例如统计 1 ~ 400W 出现 1 的次数。
     *         
     */



    function countShow() {
        var num = 0;
        for (let i = 1; i < 400000; i++) {
            if (i) {
                if (String(i).includes(1)) {
                    num++;
                }
            }
        }
        return num
    };

    // console.log(countShow());
}

export {
    everydayOneTitle121
}