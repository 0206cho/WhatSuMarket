// js 객체 선언
var person = {
    'name' : "",
    'age' : 0,
    // 자식 객체 선언
    'chard' : {
        'name' : "",
        'flist' : [], // 배열
        
    },
    'toString' : function(){
        return this.name + this.age;
    }
}

// 호출 및 사용
person.name = "기춘";
person.age = 10;
person.toString();

// 클래스 - 껍데기 생성
class Person{
    constructor(){ // 필드 선언은 여기 안에서만 가능
        this.name ="우엉";
        this.age = 20;
    }
    toString(){
        return this.name;
    }
}