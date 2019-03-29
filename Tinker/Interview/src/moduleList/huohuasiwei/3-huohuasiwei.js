let moduleName3 = "火花思维";

/**
 * 实现一个字符串去重的函数
 */
{
    function duplicateRemoval(str) {
        var obj = {};
        let j = 0;
        for (let i = 0; i < str.length; i++) {
            if (!obj[str[i]]) {
                obj[str[i]] = 1;
            } else {
                obj[str[i]]++;
            }
        }
        console.log(obj)

    };

    let str = "wwaannggqqiiwwaannggqqii"
    // duplicateRemoval(str);
}

/**
 * es6中利用数组去重方法实现
 * 
 */
{
    function duplicateRemoval(str) {
        let arr = str.split("");
        let newStr = Array.from(new Set(arr)).join("");
        console.log(newStr);
    };

    let str = "wwaannggqqiiwwaannggqqii"
    duplicateRemoval(str);
}

export { moduleName3 };