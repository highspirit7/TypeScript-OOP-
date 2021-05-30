const x = {};
const y = {};

console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
	this.beans = beans;
	// Instance member level : 해당 클래스로 생성되는 모든 인스턴스에 존재
	// this.makeCoffee = (shots) => {
	// 	console.log('making... coffee');
	// };
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
	console.log('making... coffee');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

// console.log(machine1);
// console.log(machine2);

function LatteMachine(milk) {
	this.milk = milk;
}

// 아래에서 처럼 어떤 클래스의 prototype에 다른 클래스의 prototype을 할당하면
// 그 다른 클래스의 멤버 변수나 메소드에 접근할 수 있게 된다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(100);
console.log(latteMachine);
latteMachine.makeCoffee(1);

/** 
 * 프로토타입은 무엇이다?
 * 자바스크립트엥서 객체지향 프로그래밍 상속을 하기 위해서 쓰이는 아이.
 * 그리고 코드를 재사용하기 위해 만들어진 아이.
 * ES6의 클래스도 내부를 살펴보면 prototype으로 구현되어 있다.
 */