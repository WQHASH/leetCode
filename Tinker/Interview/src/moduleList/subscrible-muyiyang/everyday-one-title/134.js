/*
 * @Description: 求两个日期中间的有效日期
 * @Author: wangqi
 * @Date: 2019-11-10 11:06:07
 * @LastEditTime: 2019-11-11 11:21:50
 */


let everydayOneTitle134 = "第 134 题：求两个日期中间的有效日期";

{
    /****
     *   第 134 题：求两个日期中间的有效日期
     *         如 2015-2-8 到 2015-3-3，返回[2015-2-8, 2015-2-9..., 2015-3-3]
     */

    function validDate(startTime, endTime) {
        startTime = +new Date(startTime);
        endTime = +new Date(endTime);
        let total = 0;
        let result = [];
        const dayTimes = 24 * 60 * 60 * 1000;
        let range = endTime - startTime;
        while (total <= range) {
            result.push(new Date(startTime + total).toLocaleDateString().replace(/\//g, "-"));
            total += dayTimes;
        }
        return result;
    };

    let startTime = '2015-2-8';
    let endTime = '2015-3-3';

    // console.log(validDate(startTime, endTime));

}

export {
    everydayOneTitle134
}