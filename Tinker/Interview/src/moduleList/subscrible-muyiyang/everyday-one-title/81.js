let everydayOneTitle81 = "第 81 题：打印出 1 - 10000 之间的所有对称数";

{
    /****
     * 第 81 题：打印出 1 - 10000 之间的所有对称数 
     *              例如：121、1331 等
     * 
     *      思考： 可以联想到 一个数是不是回文数的题
     */
    let symmetricNum = function () {
        return [...Array(1000).keys()].filter((val, index, list) => {
            return String(val).length > 1 && val == Number(String(val).split("").reverse().join(""))
        })
    };
    // console.log(symmetricNum());
}

export {
    everydayOneTitle81
}