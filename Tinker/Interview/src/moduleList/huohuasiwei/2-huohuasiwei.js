let moduleName2 = "火花思维";

// 以下例子都按es5this处理

{
    //如果是es5中的  es6中的话这里的this为undefined 
    function fn() {
        console.log(this, "fn")
        this.name = 1;
    };
    var obj = {
        name: 'obj',
        fn: fn
    };
    fn();                       // this指向 >  window
    obj.fn();                   // this指向 > obj
    var fn2 = obj.fn; fn2();    // this指向 > window

}

{
    var fullName = "三角兔";
    var obj = {
        fullName: "方块后",
        prop: {
            fullName: "圆圆数",
            getFullName: function () {
                return this.fullName;
            }
        }
    };

    console.log(obj.prop.getFullName());        //  圆圆数
    var getFullName = obj.prop.getFullName;     //三角兔
    console.log(getFullName());

}

export { moduleName2 };