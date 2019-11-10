/*
 * @Description: 用 setTimeout 实现 setInterval，阐述实现的效果与 setInterval 的差异
 * @Author: wangqi
 * @Date: 2019-11-10 11:06:07
 * @LastEditTime: 2019-11-10 11:30:12
 */


let everydayOneTitle133 = "第 133 题：用 setTimeout 实现 setInterval，阐述实现的效果与 setInterval 的差异";

{
    /****
     *   第 133 题：用 setTimeout 实现 setInterval，阐述实现的效果与 setInterval 的差异
     *         
     */


    function mySetInterval(callBack, interval) {
        (function setInter() {
            callBack();
            mySetInterval.time = setTimeout(setInter, interval);
        })();
    };
    // 清除定时器
    mySetInterval.clearTime = function () {
        clearTimeout(mySetInterval.time)
    }

    let cb = function () { console.log(11) };
    // mySetInterval(cb, 1000);

    // setTimeout(function () {  
    //     mySetInterval.clearTime()
    // }, 3000)

}

export {
    everydayOneTitle133
}