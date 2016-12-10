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
