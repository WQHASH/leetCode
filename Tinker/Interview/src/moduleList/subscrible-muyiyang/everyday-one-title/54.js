let everydayOneTitle54 = "冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？";
{
    let bubble = function (arr) {
        for (let i = 0, length = arr.length - 1; i < length; i++) {//确定需要比较的外圈数，eg两个数只需要一圈
            // for (let j = 0; j < arr.length-1-i; j++) {  //确定内圈数，-i-1(减i是左边的确定数不需要再比较，减一同上)
            //     if (arr[j] > arr[j + 1]) { //小到大     //内层两两相比
            //         let temp = arr[j];
            //         arr[j] = arr[j + 1];
            //         arr[j + 1] = temp;
            //     }
            // }
            //********这两种排序的不同在于 内外层比较 还是 内层自身比较 (共同点是排过序的不再排)******** */
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {  //小到大
                    // let temp = arr[i];
                    // arr[i] = arr[j];
                    // arr[j] = temp;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }

            }

        }
        return arr;
    };
    let arr = [22, 34, 2, 3, 5, 6, 89, 21];
    // console.log(bubble(arr));
    /***
     * 看起来没问题，不过一般生产环境都不用这个，原因是效率低下，
     * 因为就算你给一个已经排好序的数组，如[1,2,3,4,5,6] 它也会走一遍流程，白白浪费资源。
     * 解决方法：
     *      加个标识，如果已经排好序了就直接跳出循环。
     */
}


/**
 * 改良版冒泡排序: (可参考->) https://www.jianshu.com/p/5d44186b5263
 *  
 * */

{
    let bubble = function (arr) {
        let isOk = true;
        for (let i = 0, length = arr.length - 1; i < length; i++) {//确定需要比较的外圈数，eg两个数只需要一圈
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {  //小到大
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    isOk = false;
                }
            }
            if (isOk) {
                break
            }
        }
        return arr;
    };
    // let arr = [22, 34, 2, 3, 5, 6, 89, 21];
    let arr = [2, 3, 4, 6, 5] //该方法并不是改版后的排序，存在问题
    console.log(bubble(arr));
}

export { everydayOneTitle54 }