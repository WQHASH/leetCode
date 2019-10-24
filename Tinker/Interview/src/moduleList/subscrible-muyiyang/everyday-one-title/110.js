/*
 * @Description: 编程题，请写一个函数，完成以下功能
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-24 21:24:51
 */

let everydayOneTitle110 = "第 110 题: 编程题，请写一个函数，完成以下功能";

{
    /****
     *   编程题，请写一个函数，完成以下功能
     *     输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'
     *          
     */

    function pritnter(arr) {
        let result = arr.reduce((prev, next, index, list) => {
            if(index > 0) {
                if(next === list[index-1]+1){
                    return prev + '~' + next;
                }else{
                    return prev + ',' + next;
                }
            }else{
                return next
            }
            
        }, '')
        console.log((result + '').split(','))
        return (result + '').split(',').map(item => item.replace(/(\d{1,})(~\d{1,})*(~\d{1,})/, '$1$3')).join(',')
    };

    let arr = [1, 2, 3, 5, 7, 8, 10];
    // console.log(pritnter(arr));


}









export {
    everydayOneTitle110
}