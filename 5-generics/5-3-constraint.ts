interface Employee {
	pay(): void;
}

class FullTimeEmployee implements Employee {
	pay() {
		console.log("get paid for full time work");
	}

	workFullTime() {}
}

class PartTimeEmployee implements Employee {
	pay() {
		console.log("get paid for part time work");
	}

	workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 💩💩💩💩
function payBad(employee: Employee): Employee {
	employee.pay();
	return employee;
}

/**
 * 제네릭 타입이 너무 일반적이기에 pay함수에 대한 체크할 수 없다.
 * 이러한 경우 extends를 사용해서 Employee 인터페이스를
 * 따르도록 조건을 설정할 수 있다.
 */

function payGood<T extends Employee>(employee: T): T {
	employee.pay();
	return employee;
}

const ellie = new FullTimeEmployee();
const jake = new PartTimeEmployee();
ellie.workFullTime();
jake.workPartTime();

// payBad 함수는 단순히 Employee 인터페이스를 따르는 객체(추상적)를 리턴하기에
// payBad 함수가 리턴하는 객체는 fulltime으로 생성된 오브젝트인지 partime으로 생성된 오브젝트인지
// 알 수가 없고, 그래서 단지 pay함수는 사용가능하게 된다.
// FullTimeEmployee 클래스, PartTimeEmployee 클래스가 각각 가지는 고유한 메소드는
// 사용할 수 없게 된다.
const ellieAfterGettingPaid = payBad(ellie);
const jakeAfterGettingPaid = payBad(jake);

const obj = {
	name: "jake",
	age: 32,
};

const obj2 = {
	animal: "🐕",
};

// 특정 객체의 키 값을 따르는 타입을 생성하려면 keyof를 사용할 수 있다.
// 객체 자체의 타입 그리고 키 값의 타입을 제네릭으로 셋업했으니 
// value에 대한 타입은 위 두가지를 활용하여 나타내면 된다.
function getValue<O, K extends keyof O>(obj: O, key: K): O[K] {
	return obj[key];
}

console.log(getValue(obj, "name"));
console.log(getValue(obj2, "animal"));
console.log(getValue(obj, "age"));
