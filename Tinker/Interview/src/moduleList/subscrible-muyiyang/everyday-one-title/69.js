let everydayOneTitle67 = "第 69 题： 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。";

{
    /****
     * 第 67 题：如何把一个字符串的大小写取反（大写变小写小写变大写）;
     *          例如 ’AbC' 变成 'aBc'
     *      
     */

    let processString = (str) => {
        let arr = str.split("");
        let newArr = [];
        arr.forEach((val, index, list) => {
            if ("A" <= val && val <= "Z") {
                newArr.push(val.toLowerCase())
            } else if ("a" <= val && val <= "z") {
                newArr.push(val.toUpperCase())
            }

        });
        return newArr.join("");

        // var arr = str.split('');
        // var new_arr = arr.map((item) => {
        //     console.log(item === item.toUpperCase());
        //     return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
        // });
        return new_arr.join('');
    };

    // console.log(processString("AbC"), "processString");

}

export {
    everydayOneTitle67
}