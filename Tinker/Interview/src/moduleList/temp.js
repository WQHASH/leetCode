let tempHtml = "临时";

{
    let dom = document.getElementById("temp-box");

    var data2 = [
        { "id": 1, children: [{ "id": "child11", children: [{ "id": "child11222" }] }, { "id": "child12" }] },
        { "id": 2 },
        { "id": 3, children: [{ "id": "child31" }, { "id": "child32" }] },
        { "id": 4 },
    ];
   
}

/**
 * 中级
 */
 //实现一个new操作符
{
    /***
     *  function Fun(){};
     *  var fun = new Fun();
     *      
     *      1: var fun = {};
     *      2: fun.__proto__ = Fun.prototype;
     *      3: Fun.call(fun);
     * 
     */
     function CreateObj(obj){
        function Fun(){};
        Fun.__proto__ = obj;
        return new Fun()
     };

}

/**
 * 实现一个JSON.stringify [对象转字符串]
 */
{
    let info ={"sname":"wangqi","city":"beijing"};
    function stringify(obj){
        let keys =[];
        let vals = [];
        let html=``;
        let str = "{"
        for(var key in obj){
            keys.push(key);
            vals.push(obj[key]);
            html=`${key}:${obj[key]+""},`
            str+=html;
        }  
        str+="}"
        return str
    };
   
    console.log(stringify(info));
}

/**
 * 实现一个JSON.parse
 */
{

}

export { tempHtml }

