let everydayOneTitle58 = "58: 箭头函数与普通函数（function）的区别是什么";

{
    /****
     * 第 58 题：箭头函数与普通函数（function）的区别是什么？
     *      构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
     *  
     * 
     *  箭头函数和普通函数的区别:
     *   1. 箭头函数中this指向定时所在的对象，普通的则是调用时的对象
     *   2. 箭头函数不可以使用argumens对象，该对象在函数体内不存在，但可用 rest参数代替
     *   3. 箭头函数不可使用yield命令， 因此箭头函数不能用作 Generator 函数。
     *  =============================  
     *   4. 箭头函数不可以使用new 是因为自身没有this，无法调用call,apply。
     *      没有prototype属性，而new命令在执行时需要将构造函数的prototype赋值给新对象的__proto__
     *  
     *  new过程大致是这样的： 
     *      function Fun(){};
     *      var fun = new Fun();     
     *      `---------------------------------`
     *      var obj = {};                   //创建一个新的空对象
     *      obj.__proto__ = Fun.prototype;  //找到new的构造函数，并复制给新对象原型
     *      Fun.call(fun);                  // 借用构造函数的方法属性
     * 
     */
}

export {everydayOneTitle58}