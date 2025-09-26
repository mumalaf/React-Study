// 1. 상수 객체
const animal = {
    type: "강아지",
    name: "가나디",
    color: "white",
};

animal.age = 2;         // 추가
animal.name = "하양이"   // 수정
delete animal.color;    // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함 (함수를 저장하는 프로퍼티)

const person = {
    name: "정다연",
    // 메서드 선언 (객체의 동작을 정의)
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();