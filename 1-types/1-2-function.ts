{
	// JavaScript π©
	// μλμ κ°μ ν¨μλ string μΈμκ° λ€μ΄μλ λμν΄λ²λ¦°λ€..(ν¨μμ λͺ©μ κ³Όλ λ€λ₯΄κ²)
	// function jsAdd(num1, num2) {
	// 	return num1 + num2;
	// }

	// // TypeScript π
	// function tsAdd(num1: number, num2: number) {
	// 	return num1 + num2;
	// }

	// // TypeScript π
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
	// λ¬Όμνλ₯Ό λΆμΈ μΈμκ°μ μ λ£μ΄μ€λ λμνλ€. μ λ£μ΄μ€¬μ κ²½μ° μ κ·Όν΄λ³΄λ©΄ undefinedλ‘ μΆλ ₯λλ€.
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
