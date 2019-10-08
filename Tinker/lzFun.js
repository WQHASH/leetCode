
/**
 * 将时间按每天进行分组 from lz
 *  "".indexOf(arg)  和 [].indexOf(arg)  他们两的arg有什么区别 [数组的不会隐士转换???]
 */
(function(){	
	var time = [
		"2018-11-29 09:25:58",
		"2018-11-29 09:20:58",
		"2018-11-28 09:25:58",
		"2018-11-27 09:25:58",
		"2018-10-29 09:25:58",
		"2017-09-09 13:25:09",
	];

	var dataTime = {
		toDay:[],
		yesterDay:[],
		lastMonth:[],
		lastYear:[],
	};
	var today = new Date();
	var todayTime = {
		y: today.getFullYear(),
		m: today.getMonth()+1,
		d: today.getDate(),
	}

	time.map(function(val,index,list){
		var arr = val.split(" ")[0].split("-");
		// 今天  => 09:49 
		if(arr.indexOf(String(todayTime.y))>-1 && arr.indexOf(String(todayTime.m))>-1 && arr.indexOf(String(todayTime.d))>-1){
			dataTime.toDay.push(val);
		}
		// 昨天  => 昨天 09:49
		if(arr.indexOf(String(todayTime.y))>-1 && arr.indexOf(String(todayTime.m))>-1 && arr.indexOf(String(todayTime.d-1))>-1){
			dataTime.yesterDay.push(val);
		}
		// 上月  => 10-18 08:45 
		if(arr.indexOf(String(todayTime.y))>-1 && arr.indexOf(String(todayTime.m))==-1){
			dataTime.lastMonth.push(val);
		}
		// 去年  => 2017-10-18 08:56
		if(arr.indexOf(String(todayTime.y))==-1){
			dataTime.lastYear.push(val);
		}
	})

	// console.log(dataTime,"dataTime");

})();

/**
 * .判断一个字符串中出现次数最多的字符，统计这个次数
 */
(function(){
	var str = 'asdfssaaasasasasaa';

	function strCount(str){
		var obj={},count=1, max=0, tempObj={};
		for(var i=0;i<str.length;i++){
			if(!obj[str.charAt(i)]){
				obj[str.charAt(i)] = 1;
			}else{
				++obj[str.charAt(i)];
			}
		}
		for(var key in obj){
			if(obj[key]>max){
				max=obj[key];
				tempObj[key] = max;
			}
		}	
		return tempObj
	};
	// console.log(strCount(str),"count");

})();

/**
 * 编写一个方法 去掉一个数组的重复元素
 */
(function(){
	function delRepe1(){
		var arr = [2,3,4,2,3,44,4,4,4,3];
		var obj={}, arrT=[];
		for(var i=0;i<arr.length;i++){
			obj[arr[i]]=1;
		};
		console.log(obj)
		for(key in obj){
			arrT.push(key);
		}
		return arrT
	};
	// console.log(delRepe1());

	function delRepe2(){
		var arr = [2,3,4,2,3,44,4,4,4,3], arrTemp=[];
		for(var i=0;i<arr.length;i++){
			if(arrTemp.indexOf(arr[i])==-1){
				arrTemp.push(arr[i]);
			};
		}	
		return arrTemp
	};
	// console.log(delRepe2());
	
})();

/**
 * JavaScript中如何检测一个变量是一个String类型？请写出函数实现
 */
(function(){
	function isClass(arg){  
		return Object.prototype.toString.call(arg).slice(8,-1)
	}
	// console.log(isClass([]))
})();

/**
 * 如何深度克隆
 */
(function(){
	function isClass(arg){  
		return Object.prototype.toString.call(arg).slice(8,-1)
	}
	function clone(obj){
		if(!obj){ alert("xx")};

		var isType = isClass(obj);
		var result;
		if(isType=="Object"){
			result={};
			for(var key in obj){
				if(isClass(key)){}
				result[key]= clone(obj[key]);
			}	
		}else if(isType == "Array"){
			result=[];
			for(var i=0;i<obj.length;i++){
				result.push(clone(obj[i]));
			}
		}else{
			//很重要如果只是一级的话返回默认
			return obj
		}
		return result

	}
	var obj={
		"sname":"wq",
		"obj": {"sage":"12"}
	}
	// console.log(clone(obj),"obj");

})();

/**
 * .写一个function，清除字符串前后的空格。（兼容所有浏览器）
 */
(function(){
 	function tirm(str){
 		return str.replace(/(^\s*)|(\s*$)/g, "");
 	}
 	// console.log(tirm("  34-懂 方面判断   "))

})();


/**
 * =============微信 => 百度，有赞，阿里总结=========
 */

 /**
  * js判断一个字符串是否是回文字符串
  * 	回文字符串：即字符串从前往后读和从后往前读字符顺序是一致的。
  */
 (function(){
 	function isString(str){
 		if(typeof str!="string"){return};
 		console.log(str.split("").join(""));
 		return str == str.split("").reverse().join("")
 	}
 	// console.log(isString("abcba"));

 })();

  /**
  * 请实现简单的双向数据绑定
  * 	Object.defineProperty (方法理解) => https://www.cnblogs.com/gaoning/p/8335748.html
  */
 (function(){
 	var data = {
 		sname:"wq"
 	};
 	var ipt = document.getElementsByClassName("two-way-bind")[0];
 	Object.defineProperty(data, "text", {
 		// 当使用了getter或setter方法，不允许使用writable和value这两个属性
 		set:function(value){
 			//体现绑定的逻辑  页面绑定
 			ipt.value = value;
 			//数据绑定
 			this.value = value;
 		},
 		get:function(){
 			console.log(data,"datwwwa")
 			return data
 		},
 		configurable:false
 	});
 	// console.log(data,"data")
 	ipt.onchange=function(e){
 		//这里只是为了触发 set方法,但是该值也没有用到  (数据绑定的体现在set方法中)
 		data.text = e.target.value;
 		// console.log(data,"data")
 	}
 })();



 /**
  * 理解	Object.defineProperty 方法中的set get
  */
 (function(){
 	　var newObj = {};
　　　　Object.defineProperty(newObj,"newAccessProperty",{
　　　　　　set: function(x){
　　　　　　　　this.newaccpropvalue = x;
　　　　　　},
　　　　　　get: function(){
　　　　　　　　return this.newaccpropvalue;
　　　　　　},　　　　　　
　　　　　　enumerable:true,
　　　　　　configurable:true
　　　　});
	 //设置值的时候触发 set方法，并将设置的值为set方法的参数 （get同理）
　　　　newObj.newAccessorProperty = 10;
	 // console.log(newObj,"newObj");
 })();



 // 1.函数的静态属性 =>配合理解了继承方式及优缺点 https://www.jianshu.com/p/2fb3bcb91034
 // 2.你说说event loop吧
 /**
  * 有一个数组 [1,2,3,4] 实现得到这个数组的全排列的数组，如 [2,1,3,4] [2,1,4,3]。 你这个算法的时间复杂度是多少
  */
 (function(){

 	function permute(input) {
	  var permArr = [],
	  usedChars = [];
	  function main(input){
		    var i, ch;
		    for (i = 0; i < input.length; i++) {
		      ch = input.splice(i, 1)[0];
		      usedChars.push(ch);
		      if (input.length == 0) {
		        permArr.push(usedChars.slice());
		      }
		      main(input);
		      input.splice(i, 0, ch);
		      usedChars.pop();
		    }
		    return permArr
	  }
	  return main(input);
	};
	// console.log(permute([5]));

 })();
//数组全排序 方法2
(function(){
	/**
	 *  As：[2,3,4]
	 *  	[2,3,4] [2,4,3] [3,2,4] [3,4,2] [4,3,2] [4,2,3] 
	 */

	function permutation(arr){
		if(arr.length==1){
			return arr;
		} else if(arr.length==2){
			return [[arr[0],arr[1]], [arr[1], arr[0]]];
		} else {
			var showPermutation=[];
			for(var i=0;i<arr.length;i++){
				var save = arr[i];
				arr.splice(i,1);
				var res = permutation(arr);
				arr.splice(i,0,save);
				for(var j=0;j<res.length;j++){
					res[j].push(arr[i]);
					showPermutation.push(res[j]);
				};
			}
		}
		return showPermutation;
	}
	// console.log(permutation([2,3,4,5]),"xx")


})();
/**
 * .函数的静态属性理解：
 */
(function(){
	function Parent(){
		//私有
		var size = "38";
		//共有
		this.sname="lxq";
	};
	//静态: 只能类访问，实例对象不能访问
	Parent.static = function(){console.log("static pro 如果访问类中的属性需要实例化")};
	Parent.prototype = {
		say:function(){console.log("work for me")},
	};

	function Child(){
		// Parent.call(this)	 // 只是借用类中的方法，原型中的方法继承不了
	};

	Child.prototype = new Parent();	// 原型链的继承关系
	var child = new Child();
	// console.log(child,"Child");
	// console.log(Parent.static())

})();


/**
 * 由js动态规划引申的问题
 * https://www.deanhan.cn/js-dynamic-planning.html
 */
(function(){
	//爬楼梯
	function climbStairs(n) {
	    if (n === 1 || n === 2) {
	        return n;
	    }
	    var ways = [];
	    ways[0] = 1;
	    ways[1] = 2;
	 
	    for(var i=2; i<n; i++){
	        ways[i]=ways[i-1] + ways[i-2];
	    }
	    return ways[n-1];
	};
	// 1 2 3 5
	// console.log(climbStairs(4),"climbStairs")
	// 1111
	// 22
	// 121
	// 211
	// 112
	// w[2] = w[1]+w[0]; // w[2]: 3
	// w[3] = w[2]+w[1]; // w[4]: 5

})();

(function(){
	/**
	 *	[1]
	 *	["a","b"]
	 *	[2,3]
	 * 	[1,a,2] [1,a,3]    [1,b,2] [1,b,3]  [1,2,a] [1,b,3] []
	 */

})();

/**
 * .实现继承,也可以配合 使用new过程对象创建理解
 */
(function(){
	
	function Parent(){};
	Parent.prototype = {
		say:function(){return "Parent-say"},
	};

	function Child(){
		Parent.apply(this,arguments);
	};
	function create(obj){
		function F(){};
		F.prototype = obj.prototype;
		return new F();
	};
	// Object.create第二个参数 可以用来重写子集的原型属性， 
	// **一般第二个参数用来弥补 constructor 的丢失问题，这个方法不兼容 IE 低版本浏览器。**
	Child.prototype = Object.create(Parent.prototype,{"sayw":function(){return "child-say"}}) || create(Parent.prototype);
	var c = new Child();
	// console.log(c,"c")

 })();

 // 说一下游览器的缓存机制
 // 现在要你完后一个dialog组件，说说你的设计思路，他应该有什么功能？



 (function(){
 	// 全排序
 	/**	
 	 *  [1,2,3]   
 	 *  [1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,2,1] [3,1,2] 
 	 */

 	 //找出下列正数组的最大差值比如: [10,5,11,7,8,9]  => 6

 	

 	 Array.prototype.myMap= function(callBack, context){
 	 	var arr = [];
 	 	if(typeof callBack != "function"){ return};
		for(var i=0;i<this.length;i++){
			arr.push(callBack.call(context, this[i], i, this));
		}	
		return arr; 		
 	 };

 	 [1,2,3].myMap(function(val, index, list){
 	 	// console.log(arguments)
 	 });



 	  Array.prototype.myReducer= function(callBack, context){
 	  		

 	  }

 })();


