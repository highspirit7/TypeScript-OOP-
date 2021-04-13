{
	// JavaScript 💩
	// 아래와 같은 함수는 string 인자가 들어와도 동작해버린다..(함수의 목적과는 다르게)
	// function jsAdd(num1, num2) {
	// 	return num1 + num2;
	// }

	// // TypeScript 🌟
	// function tsAdd(num1: number, num2: number) {
	// 	return num1 + num2;
	// }

	// // TypeScript 🌟
	// function fetchNum(id: string): Promise<number> {
	// 	// logic..
	// 	// logic..
	// 	// logic..
	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	});
	// }

	// JavaScript => TypeScript
	// Optional parameter
	// 물음표를 붙인 인자값은 안 넣어줘도 동작한다. 안 넣어줬을 경우 접근해보면 undefined로 출력된다.
	function printName(first: string, middle: string, last?: string) {
		console.log(`${first} ${middle} ${last}`);
	}

	printName("Jiyeol", "Jake", "Lee");
	printName("Jiyeol", "Lee");
	printName("Jiyeol", "Lee", undefined);

	// Default parameter
	function printMessage(message: string = "default msg") {
		console.log(message);
	}
	printMessage();

	// Rest parameter
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b);
	}

	console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}
