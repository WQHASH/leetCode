let everydayOneTitle67 = "第 67 题：随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]";

{
    /****
     * 第 67 题：随机生成一个长度为 10 的整数类型的数组，
     *          例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，
     *          例如 [[2, 3, 4, 5], [10, 11], [20]]
     *      
     *      思路:
     *          1.首先数组需要去重;
     *          2.然后将连续的数值放到一个数组中
     */

    let formNewArray = function (arr) {
        //数组去重后在排序
        let formarr = Array.from(new Set(arr)).sort((a, b) => { return a - b });
        // console.log(formarr, "formarr");
        //连续的数值进行分组
        let continueArr = [], tempArr = [];
        formarr.map((val, index) => {
            tempArr.push(val);
            if (formarr[index + 1] !== ++val) {
                continueArr.push(tempArr);
                tempArr = [];
            }
        });
        return continueArr;
    };

    let arr = [2, 10, 3, 4, 5, 11, 10, 11, 20];
    let random = formNewArray(arr);
    // console.log(random);

}

export {
    everydayOneTitle67
}