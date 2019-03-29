
let moduleName = "火花思维";

/**
 * try中碰到异步处理时，异步逻辑报错 catch将捕获不到错误，而是会控制台直接打出
 */

{
    try {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 100);
        setTimeout(() => {
            console.log(4);
            throw new Error("ww");
        });
        console.log(5);
    } catch (e) {
        console.log("有错");
    }
    // 对应log输出为:  2,5, 4, ww,  3
}

/**
 *  请实现一个 formatString函数
 *   1.带占位符的字符串 "z%sx%sy"
 *   2.替换的占位符的字符串数组 ['c', 'dd', 'fff', ''asdf]
 *   如果入参的字符串中的占位符都能被用，那么忽略剩余字符串
 *      eg:  formatString('z%sx%sy', ['c', 'dd', 'fff', ''asdf]); //  > 'zcxddy'
 * 
 */

{ }





export { moduleName };