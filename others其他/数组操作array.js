//map迭代，不改变原数组
var arr = [1,2,3,4,5];
var after=arr.map(function(temp){
  return temp*3;
});

//reduce迭代，不改变原数组
var array=[1,2,3,4,5];
//previousVal:累加器的值；currentVal:当前值；
var addition=array.reduce(function(previousVal,currentVal){
  return previousVal+currentVal;
});

//filter迭代，过滤作用
var array2 = [1,2,3,4,5,6,7,8,9,10];
var newArray = array2.filter(function(val){
  return val<6;//得到小于6的数，生成新的数组
});

//sort排序，会改变原数组
var array = [1, 12, 21, 2];
array.sort(function(a,b){
  return b-a;
});

//翻转reverse()
var array = [1,2,3,4,5,6,7];
var newArray = [];
newArray = array.reverse();

//拼接数组
var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe);

//分割字符串成为数组
var string = "Split me into an array";
var array = [];
array = string.split(" ");

//数组转换成字符串，以参数为连接符
var join = ["Split","me","into","an","array"];
var joinedString = '';
joinedString = join.join(" ");

//利用数组让字符串翻转
function reverseString(str) {
  var arr=str.split("");
  arr.reverse();
  str=arr.join("");
  return str;
}

//子字符串 参数为起始位置和子字符串长度
var str = "abcdefghij";
console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
console.log("(-3): "     + str.substr(-3));    // (-3): hij
console.log("(1): "      + str.substr(1));     // (1): bcdefghij
