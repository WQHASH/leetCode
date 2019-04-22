let everydayOneTitle59 = "58: 给定两个数组，写一个方法来计算它们的交集";

{
    /****
     * 第 59 题：给定两个数组，写一个方法来计算它们的交集
     *      例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
     *      
     *      问题：
     *          1. 这里所说的取交集取的意思本身就是数组去重后的交集
     *          2. 交集返回的是两数组都存在的数，(这样就不需要去重)
     *  
     *          ----------- 该题对应leetCode中P.350 以下解答可能不符合算法需求 --------------
     */
    //去重的处理 [es6]
    function arrIntersection(arr1, arr2) {
        let newArr = [...arr1, ...arr2];
        return Array.from(new Set(newArr));
    };

    let nums1 = [1, 2, 2, 1];
    let nums2 = [2, 2];
    // console.log(arrIntersection(nums1, nums2));

}




// ********** 不去重的处理 **********
{
    //不去重的处理 [es5]
    function arrIntersection(arr1, arr2) {
        let newArr = [];
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    newArr.push(arr1[i]);
                    break;
                }
            }
        }
        return newArr;
    };

    let nums1 = [1, 2, 2, 1];
    let nums2 = [2, 2];
    // console.log(arrIntersection(nums1, nums2));
}

{
    //不去重的处理 [es6]
    function arrIntersection(arr1, arr2) {
        return arr1.filter(function (item) {
            return arr2.indexOf(item) > -1;
        });
    };
    let nums1 = [1, 2, 2, 1];
    let nums2 = [2, 2];
    // console.log(arrIntersection(nums2, nums1));

}

{
    //用到es6的includes方法
    function arrIntersection(nums1, nums2) {
        return nums1.filter((item) => {
            return nums2.includes(item);
        });
    };

    let nums1 = [1, 1];
    let nums2 = [1];
    console.log(arrIntersection(nums1, nums2));
}

export { everydayOneTitle59 }