let everydayOneTitle86 = "第 86 题：周一算法题之「两数之和」";

{
    /****
     * 第 86 题：周一算法题之「两数之和」
     *  给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
     *  你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
     *      eg:
     *          给定 nums = [2, 7, 11, 15], target = 9
     *          因为 nums[0] + nums[1] = 2 + 7 = 9
     *          所以返回 [0, 1]
     */



    let twoSum = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 1 + i; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i, j];
                }
            }
        }
    };
    let nums = [2, 11, 7, 15], target = 9;
    // console.log(twoSum(nums, target));

}

/**
 * 一趟哈希表
 *  这里解释下 in 运算符：
 *      prop in object
 *       prop: 一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）。
 *       objectName: 检查它（或其原型链）是否包含具有指定名称的属性的对象。
 * 
 *  ******* prop匹配的是 键名， object需要是一个对象类型 ********
 */
{
    let twoSum = function (nums, target) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let n = nums[i];
            if ((target - n) in nums) {
                return [i, map[target - n]];
            } else {
                map[n] = i;
            }
        }
    }
    let nums = [2, 11, 7, 15], target = 9;
    // console.log(twoSum(nums, target));
}

export {
    everydayOneTitle86
}