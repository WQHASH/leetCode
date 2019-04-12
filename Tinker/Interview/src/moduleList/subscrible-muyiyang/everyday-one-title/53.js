let everydayOneTitle53 = "输出以下代码的执行结果并解释为什么";
{
    var a = {n: 1};
    var b = a;
    a.x = a = {n: 2};
    
    console.log(a.x) 	// --> undefined
    console.log(b.x)    // --> {n: 2}

    /***
     *  1. 优先级问题。 .的优先级高于=，所以先执行a.x, 这时内存中就存在a.x=undefined; 
     *                  则a为 {n: 1, x: undefined}, b引用的是a的指正地址，所以b也跟着改变了
     *  2. 赋值操作是从右到左的先执行 a = {n:2},这时的a是一块新的内存空间。 即a的的所有执行就结束了，a = {n:2}
     *     这时候对于b来说他的内存地址还是第一步执行中a的那份地址，{n:1, x:undefined},
     *      执行a.x = a = {n: 2};对b来说，相当于 b.x = {n:2} -->{n:1,x:{n:2}}
     *      ****注意的是上面 a.x = a这时候是存在的是两块a的内存地址的，[需要很快想清楚!!]
     * 
     */
}

export {everydayOneTitle53}