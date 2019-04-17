let everydayOneTitle56 = "要求设计 LazyMan 类";
/****
 * 第 56 题：要求设计 LazyMan 类，实现以下功能。
 *  
 * LazyMan('Tony');   
 *      Hi I am Tony 
 * LazyMan('Tony').sleep(10).eat('lunch');  
        // Hi I am Tony
        // 等待了10秒...
        // I am eating lunch
 * LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
        // Hi I am Tony
        // I am eating lunch
        // 等待了10秒...
        // I am eating diner

 * LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
        // Hi I am Tony
        // 等待了5秒...
        // I am eating lunch
        // I am eating dinner
        // 等待了10秒...
        // I am eating junk food

    思路：
        本质上就是实现链式调用, 再配合数组抛出方法挨个执行
                    (这里的延时是当定时器的方法执行完后，在去执行next() 即执行数组抛出的下一个方法)
        LazyMan.sleep.eat.sleepFirst
 */

{
    class Lazy {
        constructor(sname) {
            this.taskList = [];
            console.log("Hi I am " + sname);
            setTimeout(() => {
                this.next()
            });
        }
        sleep() {
            let fn = () => {
                setTimeout(() => {
                    console.log("等待了sleep -10秒...");
                    this.next();
                }, 5000);
            }
            this.taskList.push(fn);
            return this;
        }
        sleepFirst() {
            let fn = () => {
                setTimeout(() => {
                    console.log("等待了sleepFirst -5秒...");
                    this.next();
                }, 10000);
            }
            this.taskList.unshift(fn);
            return this;
        }
        eat(str) {
            let fn = () => {
                console.log("I am eating" + str);
                this.next();
            }
            this.taskList.push(fn);

            return this;
        }
        next() {
            let fn = this.taskList.shift();
            fn && fn();
        }
    };

    function LazyMan() {
        return new Lazy("Tony");
    }
    // LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');


}


export { everydayOneTitle56 }