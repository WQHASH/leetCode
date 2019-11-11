/*
 * @Description: 算法题
 * @Author: wangqi
 * @Date: 2019-11-10 11:06:07
 * @LastEditTime: 2019-11-11 11:53:39
 */


let everydayOneTitle135 = "第 135 题：算法题";

{
    /****
     *   第 135 题：算法题
     *          在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组*          排序。使得排序后数组中球的顺序为:黄、红、蓝。
     * 
     *          例如： 红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。
     */

    function sortBy(arr) {
        arr = arr.split("");
        let obj = { "黄": 0, "红": 1, "蓝": 2 };
        return arr.sort((left, right) => {
            return obj[left] - obj[right]
        })
    };

    let arr = "红蓝蓝黄红黄蓝红红黄红";
    // console.log(sortBy(arr));

}


{

    let arr = "红蓝蓝黄红黄蓝红红黄红";
    let colorGroup = ["黄", "红", "蓝"];

    function sortBy(arr, colorGroup) {
        arr = arr.split("");
        return function (index, result) {
            arr.forEach((val) => {
                if (val == colorGroup[index]) {
                    result.push(val)
                }
            })
        }
    };
    function colorGroupMap(colorGroup, maps) {
        let result = [];
        colorGroup.forEach((val, index, list) => {
            maps(index, result)
        });
        return result;
    }

    let maps = sortBy(arr, colorGroup);
    let sortByResult = colorGroupMap(colorGroup, maps);
    // console.log(sortByResult, "sortByResult");
    
}

export {
    everydayOneTitle135
}