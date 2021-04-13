{
	/**
	 * Type Inference
	 */

	let text = "hello";

	// string으로 타입이 자동우로 설정되었기 때문에 아래 코드처럼 다른 타입을
	// 넣으면 에러 발생!
	// text = 0;

	function printMessage(message = "Bonjour") {
		console.log(message);
	}

	printMessage("hello");
	// 아래 처럼 숫자를 넣으면 에러
	// printMessage(0);

	// 숫자와 숫자를 곱하면 숫자이므로 아래 함수 리턴 타입이 number로 자동 추론된다.
	function multiply(x: number, y: number) {
		return x * y;
	}
	const result = multiply(100, 6);

	// 원시 타입 데이터를 단순히 할당하고 그런 경우를 제외하고는
	// 웬만하면 제대로 타입을 명시하기를 추천!
}
