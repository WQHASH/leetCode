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
     * 
     *      理解：
     *          数组方法中的push追加元素是看length长度的,
     *          所以当对象使用该方法, 看的是以数字为key的下标和length为基础
     * 
     *          eg: var arr = [2,3,4] arr.length = 2;
     *              输出arr: [0:2, 1:3, length:2]  
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


{
    // 为什么 js用 length 和 splice 能创建类数组对象?
    // 是否是伪数组是看有没有 length属性和一数字递增的 key值，和splice属性无关,
    // 打印结果为数组是和游览器有关系，换成火狐的则会显示对象的
    var obj = {
        length: 0,
        splice: function () { }
    };
    // console.log(obj, "obj")
}

export {
    everydayOneTitle46
}