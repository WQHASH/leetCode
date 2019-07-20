let everydayOneTitle82 = "第 82 题：算法题「移动零」，给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。 ";

{
    /****
     * 第 82 题：算法题「移动零」，
     *          给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。 
     *              例如：输入: [0,1,0,3,12]  输出: [1,3,12,0,0]
     *              说明:   1.必须在原数组上操作，不能拷贝额外的数组。
     *                      2.尽量减少操作次数。
     * 
     */
    let moveNum = function (nums) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                nums.push(0);
                nums.splice(i, 1);
            }
        };
        return nums
    };
    let arr = [0, 1, 0, 3, 12];
    // console.log(moveNum(arr));
}


//优化版
{

    let moveNum = function (arr) {
        let len = arr.length;
        let j = 0;
        for (let i = 0; i < len - j; i++) {
            if (arr[i] === 0) {
                arr.push(0);
                arr.splice(i, 1);
                i--;
                j++;
            }
        }
        return arr;
    };
    let arr = [0, 1, 0, 3, 12];
    // console.log(moveNum(arr));
}

export {
    everydayOneTitle82
}