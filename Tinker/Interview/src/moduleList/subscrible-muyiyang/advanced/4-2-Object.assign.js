let assign = "assign";
/**
 * 【进阶4-2期】Object.assign 原理及其实现
 *      1. Object.assign 作用
 *      2. Object.assign 实现
 * 
 *      Object.assign其实就是实现了对象的浅拷贝方法;
 *          Object.assign(target, sources) 
 *              target:  目标对象，必须存在的参数，
 *              sources：资源对象可以存在多个，且后边的对象用以覆盖前面的对象，包括target中属性
 *      Object.assign 实现这里运用了Object.defineProperty特性，可以熟悉下
 */
{
    Object.defineProperty(Object, "myAssign", {
        value: function (target) {
            if (target == "null") {
                return new TypeError("Cannot convert undefined or null to object");
            };
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource != null) {
                    for(var key in nextSource){
                        if(Object.prototype.hasOwnProperty.call(nextSource, key)){
                            to[key] = nextSource[key];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true,
    });
    
}


export { assign }