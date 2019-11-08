/*
 * @Description: 第 129 题：输出以下代码执行结果
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-11-08 11:02:37
 */

let everydayOneTitle129 = "第 129 题：输出以下代码执行结果";

{
    /****
     *   第 129 题：输出以下代码执行结果
     *          例如统计 1 ~ 400W 出现 1 的次数。
     *         
     */


    /**
     * 逻辑  因为 new Promise()这部分代码是同步执行的 (.then是按异步处理);
     *       所以当赋值给 x,y,z时已经是同步执行setTimeout了, await x这样只是等待任务结果, 所以只有1秒的间隔;
     *       如果改成 await wait()  * 3  => 会依次等待每个函数执行完成 (也就是3秒了);
     * 
     *      他俩的区别： await obj  和 await fun() 这样是不一样的，前者只是等待一个结果（相当于就是同步了），后者是要重新执行fun的
     */

    function wait() {
        return new Promise(resolve =>
            setTimeout(resolve, 1 * 1000)
        )
    }

    async function main() {
        console.time();
        // ----- 1秒 ----- 
        const x = wait();
        const y = wait();
        const z = wait();
        await x;
        await y;
        await z;
        // ----- 1秒 -----

        // ----- 3秒 -----
        // await wait();
        // await wait();
        // await wait();
        // ----- 3秒 -----

        console.timeEnd();
    }
    // main();


}

export {
    everydayOneTitle129
}