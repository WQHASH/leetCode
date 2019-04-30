let everydayOneTitle47 = "47: 双向绑定和 vuex 是否冲突";

{
    
    /****
     * 第 47 题：双向绑定和 vuex 是否冲突
     *      
     *      当严格模式中使用vuex时, 直接去修改vuex中的state会抛出一个错误,
     *      由于这个修改不是在mutation函数执行的。
     *  
     * 思路：
     *     可以在事件中调用一次 this.$store.commit("stateName","stateVal");
     *      对于 v-model这种有两种方法可处理：
     *          ①.
     *             通过组件的computed，在其里边计算
     *             computed:{
     *                  stateName:{get(){return this.$store.stateName}, set(v){this.$store.commit("", v)} }
     *              }             
     * 
     *          ②.
     *            使用watch监听方式处理
     *              watch: {"stateName":{ callback(val){this.$store.commit("", val)}} },
     *              
     * 
     */ 

}

export {
    everydayOneTitle47
}