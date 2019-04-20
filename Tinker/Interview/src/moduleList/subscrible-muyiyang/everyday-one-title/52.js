let everydayOneTitle52 = "58: 怎么让一个 div 水平垂直居中";

{
    /****
     * 第 52 题：怎么让一个 div 水平垂直居中
     *          <div class="parent">
     *              <div class="child"></div>
     *          </div>
     *  
     *          1. 
     *              .parent{ position:relative;}
     *              .child{ position: absolute; top:50%-自身高度; left:50%-自身宽度;}
     * 
     *          2.  同上但是用到 css3属性 transform:translate(50%, 50%);
     *          
     *          3.  .parent{ display:flex} 
     *              .child{ justify-centent: center; align-items: center;}
     * 
     *          4.  .child{ margin-top:(parent的高度-自身高度)/2; margin-left:{同理}}
     * 
     *          5.  .parent{ dispaly: grid} 
     *              .child{ justify-centent: center;align-self:center;}
     *  
     */
}

export {
    everydayOneTitle52
}