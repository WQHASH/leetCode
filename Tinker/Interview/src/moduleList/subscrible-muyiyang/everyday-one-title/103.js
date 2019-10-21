/*
 * @Description: 模拟实现一个 localStorage
 * @Author: wangqi
 * @Date: 2019-10-08 21:36:36
 * @LastEditTime: 2019-10-21 22:21:34
 */

let everydayOneTitle103 = "第 103 题: 模拟实现一个 localStorage";

{
    /****
     *   模拟实现一个 localStorage
     *      思路: 通过 cookie 的思路将其保存, 说白了就是写个 封装个cookie调用方法
     *          
     */

    (function () {
        !window.localStorage && !function (win) {
            var thousandYears = 1e3 * 365 * 24 * 36e5;

            function getCookies() {
                return document.cookie.match(/([^;=]+)=([^;]+)/g) || [];
            }

            function getExpires(flag) {
                flag = flag || 1;

                return 'expires=' +
                    (new Date((+new Date()) + thousandYears * flag)).toUTCString();
            }

            function get(key) {
                var cookies = getCookies();

                for (var i = 0; i < cookies.length; i++) {
                    var param = cookies[i].match(/^\s*([^=]+)=(.+)/);

                    if (param[1] === String(key)) {
                        return decodeURIComponent(param[2]);
                    }
                }

                return null;
            }

            function set(key, value, isExpired) {
                document.cookie = [
                    key + '=' + encodeURIComponent(value),
                    getExpires(isExpired ? -1 : 1),
                    'path=/'
                ].join('; ');
            }

            function remove(key) {
                set(key, '', true);
            }

            function clear() {
                var cookies = getCookies();

                for (var i = 0; i < cookies.length; i++) {
                    var key = cookies[i].match(/^\s*([^=]+)/)[1];
                    remove(key);
                }
            }

            // 注册到 window 对象上
            win.localStorage = {
                getItem: get,
                setItem: set,
                removeItem: remove,
                clear: clear
            };
        }(window);

    })();


}


//扩展 -> 封装操作localstorage本地存储的方法
{
    var storage = {
        set(key, value) {
            window.localStorage.setItem(key, JSON.stringify(value));
        },
        get(key) {
            return JSON.parse(window.localStorage.getItem(key));
        },
        remove(key) {
            window.localStorage.remove(key);
        }
    }
}

// 简单封装cookies
{
    let myCookies = {
        set(name, val, time) {
            let curTime = new Date();
            curTime.setDate(curTime.getDate() + time);
            document.cookies = name + "=" + val + ";expires=" + curTime;
        },
        get(name) {
            let str = document.cookie;
            let arrStr = str.split(";");
            for (let i = 0; i < arrStr.length; i++) {
                let arr = arrStr[i].split("=");
                if(arr[0] == name){
                    return arr[1]
                }
            }
        },
        remove(name) {
            set(name, "", -1)
        },
    }


}



export {
    everydayOneTitle103
}