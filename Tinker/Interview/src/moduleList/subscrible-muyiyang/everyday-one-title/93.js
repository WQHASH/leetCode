/*
 * @Description: Promise.all实现
 * @Author: wangqi
 * @Date: 2019-09-30 16:01:14
 * @LastEditTime: 2019-10-05 12:06:07
 */


let everydayOneTitle93 = "第 92 题: 求中位数";

{
    /****
     *  给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的*  中位数。要求算法的时间复杂度为 
     * 
     *  思路: 利用二分法来实现
     * 
     */


    let num1 = [1, 2];
    let num2 = [3, 4];

    let findMedian = (num1, num2) => {
        let arr = num1.concat(num2);
        arr = arr.sort((a, b) => { return a - b });
        let mid = Math.floor(arr.length / 2);
        if (arr.length % 2 == 0) {
            return (arr[mid - 1] + arr[mid]) / 2
        } else {
            return arr[mid]
        }
    }
    // console.log(findMedian(num1, num2))

}

export {
    everydayOneTitle93
}