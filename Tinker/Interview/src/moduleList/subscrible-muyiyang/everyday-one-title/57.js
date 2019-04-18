let everydayOneTitle57 = "分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。";

{
    /****
     * 57: 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。
     *      结构上：
     *          opacity:
     *              只是将透明度设置为0, Dom元素还是存在的
     *          visibility：
     *              将Dom元素还在,只是看不见而已
     *          display:
     *              Dom元素不见了,不暂用元素标签
     * 
     *      继承上：
     *          opacity, display非继承属性，
     *              父节点设置opacity:0, display:none, 子节点在设置 opacity:1, display:block;子节点也不会显示
     *          visibility是继承属性，
     *              父节点设置 visibility:hidden,子节点在设置 visibility:visible;子节点会显示
     *      性能：
     *          display:none; 
     *              修改元素会造成文档回流,性能消耗较大，每次都会重新加载
     *          visibility:hidden; opacity: 0;
     *              修改元素只会造成本元素的重绘, 性能消耗较少
     *  
     *              回流:（影响周围元素和dom树） 浏览器为了重新渲染部分或者全部的文档而重新计算文档中元素的位置和几何构造的过程
     *              重绘：（不影响布局） 改变色彩
     */
}

export { everydayOneTitle57 }