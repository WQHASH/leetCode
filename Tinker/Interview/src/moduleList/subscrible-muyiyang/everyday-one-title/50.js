let everydayOneTitle50 = "50: 实现 (5).add(3).minus(2) 功能";

{
    /****
     * 第 50 题：实现 (5).add(3).minus(2) 功能
     *      
     *      思路:
     *          扩展Number原型的方法，增加add [加法] 和minus [ 减法]两个方法
     * 
     *      注意点:
     *          这里可能需要对传入的num进行判断处理，但是我这里就没有处理了。
     */

    Number.prototype.add = function(num){
        return this + num;
    }

    Number.prototype.minus = function(num){
        return this - num;
    }
    // console.log((5).add(3).minus(2))


}

export {
    everydayOneTitle50
}