let moduleName4 = "火花思维";
/**
 * 请实现一个 flattenDeep函数, 把嵌套的数组拉平
 *  eg: flattenDeep([1, [2, [3, [4]], 5]]) => [1,2,3,4,5];
 */
{
    let newArr = [];
    function flattenDeep(arr) {
        for (let i = 0; i < arr.length; i++) { 
            if(Object.prototype.toString.call(arr[i]).slice(8,-1)==="Array"){
                flattenDeep(arr[i]);
            }else {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    let arr = [1, [2, [3, [4, 6]], 5]];
    // console.log(flattenDeep(arr))

}
/**
 * 利用数组转字符串的思路处理
 *   toString改成join也能实现 
 */
{
    function flatten(arr) {
        return arr.toString().split(',').map(function(item) {
            return Number(item);
        })
    } 
    let arr = [1, [2, [3, [4]], 5]];
    console.log(flatten(arr))
}

/**
 * es6实现数组偏平化
 *  注意： [].concat(...[1, [2, [3, [4, 6]], 5]]  => es6的扩展运算符能将二维数组变为一维
 */
{
    function flattenDeep(arr) {
        return arr.reduce((result, item)=>{
            return result.concat(Array.isArray(item)?flattenDeep(item):item);
        }, []);
    }
    let arr = [1, [2, [3, [4]], 5]];
    console.log(flattenDeep(arr))

}



export { moduleName4 };