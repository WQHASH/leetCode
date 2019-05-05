let everydayOneTitle43 = "43: 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果";

{

    /****
     * 第 43 题：使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果
     *   
     */

    //这种没有回调函数的是按UTF-16 排序的
    let arr = [102, 15, 22, 29, 3, 8].sort()
    // console.log(arr);

    //根据数值的大小进行排序的
    // a-b>0: 升序;   a-b<0: 降序;
    let newArr = [102, 15, 22, 29, 3, 8].sort((a, b) => {
        return a - b
    });
    // console.log(newArr, "newArr")
}




export {
    everydayOneTitle43
}