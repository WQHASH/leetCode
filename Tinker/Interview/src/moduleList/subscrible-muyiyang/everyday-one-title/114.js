/*
 * @Description: 编程题，找出字符串中连续出现最多的字符和个数（蘑菇街）
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-11-03 10:11:59
 */

let everydayOneTitle114 = "第 114 题: 编程题，找出字符串中连续出现最多的字符和个数（蘑菇街）";

{
    /****
     *   编程题，找出字符串中连续出现最多的字符和个数（蘑菇街）
     *          'abcaakjbb' => {'a':2,'b':2}
     *          'abbkejsbcccwqaa' => {'c':3}
     */

    function serachStr(str) {
        // \w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'
        // \1 匹配的是 (\w)中的多个内容
        let arr = str.match(/(\w+)\1+/g);
        // let maxVal = 1;
        // let maxKey = "";
        // arr.forEach((key, val, list) => {
        //     if (key.length > maxVal) {
        //         maxVal = key.length;
        //         maxKey = key.slice(0, 1)
        //     }
        // })
        // return { [maxKey]: maxVal }


        const maxLen = Math.max(...arr.map(s => s.length));
        const result = arr.reduce((pre, curr) => {
            if (curr.length === maxLen) {
                pre[curr[0]] = curr.length;
            }
            return pre;
        }, {});

        return result
    }

    let str = 'abcaakjbb';
    console.log(serachStr(str), "serachStr")



}

export {
    everydayOneTitle114
}