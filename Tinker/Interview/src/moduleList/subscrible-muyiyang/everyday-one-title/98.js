/*
 * @Description: 执行结果
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-13 11:12:39
 */

let everydayOneTitle98 = "第 98 题: 写出如下代码的打印结果";

{
    /****
     *  写出如下代码的打印结果
     * 
     *  思路: 理解对象的引用关系;   可以扩展理解 《你不知道的javaScript中卷》
     *      
     */

    function changeObjProperty(o) {
        o.siteUrl = "http://www.baidu.com"
        o = new Object()
        o.siteUrl = "http://www.google.com"
    }
    let webSite = new Object();
    changeObjProperty(webSite);
    // console.log(webSite.siteUrl);
}



export {
    everydayOneTitle98
}