let tempHtml = "临时";

{
    /*****
     * 根据数据结构写出 无限极树形结构代码????
     */
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
    function CreateObj(obj) {
        function Fun() { };
        Fun.__proto__ = obj;
        return new Fun()
    };

}

/**
 * 实现一个JSON.stringify [对象转字符串]
 */
{
    let info = {"sname":"wq","city":"bi"};
    var JSON1 = {
        stringify2: function (jsObj) { //使用数组栈方式
            var stack1 = [];
            var stack2 = [];
            var process = function (obj) {
                if (obj && typeof obj == "object") {
                    return obj;
                } else if (typeof obj == "string") {
                    return "\"" + obj.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
                } else {
                    return obj + "";
                }
            }
            stack1.push(process(jsObj));

            while (stack1.length) {
                var o = stack1.pop();
                if (typeof o == "object") {
                    var i = null;//必须显示的设置为null，防止空对象时保留了上一次循环的结果
                    if (o instanceof Array) {
                        stack1.push("[");
                        for (i = 0; i < o.length; i++) {
                            stack1.push(process(o[i]));
                            stack1.push(",");
                        }
                        if (i) {//移除最后一个无效的逗号[,]
                            stack1.pop();
                        }
                        stack1.push("]");
                    } else {
                        stack1.push("{");
                        for (i in o) {
                            stack1.push("\"" + i + "\":");
                            stack1.push(process(o[i]));
                            stack1.push(",");
                        }
                        if (i) {//移除最后一个无效的逗号[,]
                            stack1.pop();
                        }
                        stack1.push("}");
                    }
                } else {//字符串（已经处理）
                    stack2.unshift(o);
                }
            }
            return stack2.join("");
        },
        stringify1: function (jsonObj) { //使用函数递归调用的方法
            var jsonBuffer = [];
            var type = typeof jsonObj;//undefined,boolean,number,string,object
            if (type === "object") {
                if (jsonObj === null) {
                    jsonBuffer.push(jsonObj + "");
                } else {
                    if (jsonObj instanceof Array) {
                        jsonBuffer.push("[");
                        for (var i = 0; i < jsonObj.length; i++) {
                            jsonBuffer.push(JSON1.stringify1(jsonObj[i]));
                            jsonBuffer.push(",");
                        }
                        if (i) {
                            jsonBuffer.pop();//移除最后一个无效的逗号[,]
                        }
                        jsonBuffer.push("]");
                    } else {
                        jsonBuffer.push("{");
                        for (var j in jsonObj) {
                            jsonBuffer.push("\"" + j + "\":" + JSON1.stringify1(jsonObj[j]));
                            jsonBuffer.push(",");
                        }
                        if (j) {
                            jsonBuffer.pop();//移除最后一个无效的逗号[,]
                        }
                        jsonBuffer.push("}");
                    }
                }
            } else if (type == "string") {
                jsonBuffer.push("\"" + jsonObj.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"");
            } else {
                jsonBuffer.push(jsonObj + "");
            }
            return jsonBuffer.join("");
        }
    }

    // console.log(typeof JSON1.stringify2(info),"string")
    // console.log(JSON.parse(JSON1.stringify2(info)))

}

/**
 * 实现一个JSON.stringify [对象转字符串]
 *  思路： 
 *      1. 需要考虑传递的数据类型，string array object这么三大类 
 *      2. array object的需要单独处理
 * 
 */
{
    let _JSON = {
        stringify(obj) {
            let stackTempStore = [];
            let stackStore = [];
            //类型转换
            let typeChange = function (obj) {
                if (obj && typeof obj == "object") {
                    return obj;
                } else if (obj && typeof obj == "string") { // "\\\""
                    return "\"" + obj.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
                } else {
                    return String(obj);
                }
            };
            stackTempStore.push(typeChange(obj));

            while (stackTempStore.length) {
                let stackTempStorePop = stackTempStore.pop();
                if (typeof stackTempStorePop == "object") {
                    var i = null;
                    if (stackTempStorePop instanceof Array) {
                        //数组
                        stackStore.push("[");
                        stackTempStorePop.forEach((val, index, list)=>{
                            stackStore.push(typeChange(val));
                            stackStore.push(",");
                        })
                        stackStore.pop();
                        stackStore.push("]")
                    } else {
                        //对象
                        stackStore.push("{")
                        for(let key in stackTempStorePop){
                            stackStore.push("\"" + key + "\":");
                            stackStore.push(typeChange(stackTempStorePop[key]));
                            stackStore.push(",");
                        }
                        stackStore.pop();
                        stackStore.push("}");
                    }
                } else {
                    stackStore.unshift(stackTempStorePop);
                }

            }
            return stackStore.join("");
        }
    }
    let arr = [1,2,3]
    let obj = {"sname":"wq","city":"bj"};
    let str= "\\\"";
    let s = _JSON.stringify(obj);
    // console.log(s,"s")
    // console.log(JSON.parse(s));



}

/***
 * 
 * 实现一个JSON.parse [字符串转对象]
 */
{
    // es6 + vue + vuex 的理解: vuex异步理解 es6特性
    // 每日一题 + 每日一算法  !import
    // 书籍， 博文

}

export { tempHtml }

