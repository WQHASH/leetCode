/*
 * @Description: 
 * @Author: wangqi
 * @Date: 2019-09-30 16:01:14
 * @LastEditTime: 2019-10-04 10:56:25
 */

let everydayOneTitle76 = "76: 输出以下代码运行结果";
{
    /***
     * // example 1
         var a={}, b='123', c=123;
         a[b]='b';
         a[c]='c';
         console.log(a[b]);
     * 
     * 
     * 
     * // example 2
         var a={}, b=Symbol('123'), c=Symbol('123');
         a[b]='b';
         a[c]='c';
         console.log(a[b]);
     * 
     * 
     * 
     * // example 3
         var a={}, b={key:'123'}, c={key:'456'};
         a[b]='b';
         a[c]='c';
         console.log(a[b]);
     * 
     */


    {
        var a = {},
            b = '123',
            c = 123;
        a[b] = 'b';
        a[c] = 'c';
        // a:{'123':'b', '123':'c'}  => a:{'123':'c'}
        // console.log(a);
        //  "c";
        // console.log(a[b]);
    }

    {
        var a = {},
            b = Symbol('123'),
            c = Symbol('123');
        a[b] = 'b';
        a[c] = 'c';
        // a:{Symbol('123'):'b', Symbol('123'):'c'}
        // console.log(a)
        // "b";
        // console.log(a[b]); 
    }

    {
        // 对象转字符串默认会调用 toString 方法。
        //  ******** toString()可以将所有的的数据都转换为字符串，但是要排除null 和 undefined
        //  var obj ={}; obj.toString => "[object Object]"
        //  var obj =[1,2,3]; obj.toString => "1,2,3"; 如果为空则为 "" 
        //  其它的构造函数调用则会装成函数的字符串
        var a = {},
            b = {
                key: '123'
            },
            c = {
                key: '456'
            };
        a[b] = 'b';
        a[c] = 'c';
        // a: {"[object Object]": "c"}
        // console.log(a);
        // "c"
        // console.log(a[b]);
    }

}


export {
    everydayOneTitle76
}