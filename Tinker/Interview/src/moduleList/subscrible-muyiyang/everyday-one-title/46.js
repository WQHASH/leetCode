let everydayOneTitle46 = "46: 输出以下代码执行的结果并解释为什么";

{

    /****
     * 第 46 题：输出以下代码执行的结果并解释为什么
     *      
     *      var obj = {
     *          '2': 3,
     *          '3': 4,
     *          'length': 2,
     *          'splice': Array.prototype.splice,
     *          'push': Array.prototype.push
     *       }
     *       obj.push(1)
     *       obj.push(2)
     *       console.log(obj)   
     *  
     *      对象是没有长度的obj的本质是个 类数组对象,
     *      Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]
     */

    var obj = {
        '2': 3,
        '3': 4,
        'length': 2,
        'splice': Array.prototype.splice,
        'push': Array.prototype.push,
    }
    obj.push(1);
    obj.push(2);
    // console.log(obj);
    //Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]

}

export {
    everydayOneTitle46
}