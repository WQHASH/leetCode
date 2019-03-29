let moduleName5 = "火花思维";
/**
 *  请实现一个栈 stack
 * 
 */
{
    function Stack() {
        this.dataStore = [];    //初始化为空
        this.top = 0;           //记录栈顶位置
    };
    Stack.prototype = {
        //入栈
        push: function (element) {
            this.dataStore[this.top++] = element;
        },
        //出栈
        pop: function () {
            return this.dataStore[--this.top];
        },
        //查看栈顶元素, [最后一个元素]
        peek: function () {
           return this.dataStore[this.top-1];
        },
        //查看栈内元素总数
        length: function () {
           return this.top;
        },
        //清空栈
        clear: function () {
           this.top = 0;
        },
    }
   
    var stack = new Stack();
    //入栈
    stack.push('Apple');
    stack.push('Banana');
    stack.push('Pear');
    console.log(stack, "stack");

}

/**
 * 
 * 实现Array.prototype.map函数
 */
{
    Array.prototype.map = function (fn) {
        let map = [];
        for (let i = 0; i < this.length; i++) {
            map.push(fn.call(this, this[i], i, list))
        }
        return map;
    }
}

{ }

/**
 * 实现Promsie.all函数
 *  eg:
 *      Promise.all([Promise0, promise1, ...]).then(){}.catch(){}
 */
{
    //网友写法, 估计又问题
    // function all(promise) {
    //     return new Promise((resolve, reject) => {
    //         let result = [];
    //         let index = 0;
    //         let processdata = (key, val) => {
    //             index++;
    //             result[key] = val;
    //             if (promise.length === index) {
    //                 resolve(result)
    //             }
    //         }
    //         for (let i = 0; i < promise.length; i++) {
    //             promise[i].then(val => {
    //                 processdata(i, val)
    //             }, reject)
    //         }
    //     })
    // }

}


export { moduleName5 };