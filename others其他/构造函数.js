var student=function(snum,sname,sage){
  //属性
      this.stuNum=snum;
      this.name=sname;
      this.age=sage;
  //成员函数
      this.setAge=function(newAge){
      this.age=newAge;
      };
      this.getAge=function(){
        return this.age;
      };
};
var s1=new student("00001","zzz",19);
s1.getAge();
s1.setAge(20);
s1.getAge();
