/**
 * References
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */

// 아래 Array 타입 정의 들어가서 lib.es5.d.ts 파일에 정리되어 있는 배열용 메소드
// 설명들 읽어보았음!
Array;

type Student = {
	passed: boolean;
};

const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }];
const result = students.every((student) => {
	return student.passed;
});
console.log(result);

class Animal {}
class Cat extends Animal {
	isCat: boolean = true;
}
class Dog extends Animal {
	isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Cat()];

// type predicate를 사용하여 아래 예시처럼 특정 타입의 서브 타입을 체크해야하는 경우에
// 'is'를 사용한 predicate 타입을 리턴하는 함수를 만들 수 있다.
function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isCat !== undefined;
}

// 이 경우 animals 배열에 전부 Cat 인스턴스만 있기에 true가 출력된다.
// Array용 메소드 타입 정의를 읽어보면 알 수 있지만(처음에는 이해 못했고 강의를 듣고 이해함;;)
// every, some 그리고 filter 메소드까지 전달받는 배열 타입의 서브타입을 체크하는
// 방식으로 동작할 수도 있다.
// 그래서 lib.es5.d.ts 파일 보면 위 메소드들은 두 가지가 적혀 있다.
console.log(animals.every<Cat>(isCat));
