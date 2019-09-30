/*
 * @Description: 函数防抖和节流
 * @Author: wangqi
 * @Date: 2019-09-30 17:05:42
 * @LastEditTime: 2019-09-30 17:52:55
 */



let everydayOneTitle79 = "79: input 搜索如何防抖，如何处理中文输入"; {

    /**
     * @description: 防抖; 本质上是每个一段时间内才会执行1次，如果强制多次执行，则会重新计算;
     * @param {type} 
     * @return: 
     */
    function debounce(callBack) {
        let time;
        return (...res) => {
            if (time) { clearTimeout(time) }
            time = setTimeout(() => {
                callBack.apply(this, res);
            }, 2000);
        }
    };


    /**
     * @description: 节流; 本质上是每个一段时间后才有输出结果，时间到了，会自己输出；
     * @param {type} 
     * @return: 
     */
    function throttle(callBack, wait) {  
        let prevTime = 0;
        return (...res) => {
            let nowTime = Date.now();
            if(nowTime - prevTime > wait) {
                callBack.apply(this, res);
                prevTime = nowTime;
            }
        }
    }

    export {
        everydayOneTitle79
    }