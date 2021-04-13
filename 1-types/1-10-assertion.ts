{
	/**
	 * Type Assertions 💩
	 */

	// 결론적으로는 피하는 것이 좋다.
	// 조금이라도 Type Assertion을 피할 수 있는 방법을 고민해보자.
	// 하지만 타입스크립트는 자바스크립트와 연동되어 사용되는 경우가 있기 때문에
	// 불가피하게 써야하는 경우도 있다.

	// 예를 들어 자바스크립트가 제공하는 함수 중에 무조건 스트링을
	// 리턴할 것이라고 확신할 수 있는 함수가 있다고 해보자.
	function jsStrFunction(): any {
		return "Bonjour";
	}

	const result = jsStrFunction();
	// 리턴 값 타입이 any이지만 아래와 같은 방식으로 타입을 강제로 할당할 수 있다.
	// 그러나 만약에 string을 리턴하는 함수가 아니었다고 한다면
	// 코드를 작성하는 시점에서 에러를 발생시키지는 않는다.
	console.log((result as string).length);
	console.log((<string>result).length);

	// 정말 타입을 장담할 수 있을때만 사용하자. 그렇지 않으면 아래 경우처럼 프로젝트가
	// 돌아가지 않게 되는 에러를 낼 수도 있다.
	const wrong: any = 8;
	(wrong as number[]).push(1); //😱

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	// 무조건 배열일 것이라고 확신할 수 있을때 아래와 같이 느낌표를 붙여서 사용할 수 있다.
	// 무조건 null이 아니라고 정의하는 것.
	numbers!.push(8);

	const button = document.querySelector("class");
	if (button) {
		// cuz button variable can be null.
		button.nodeValue;
	}

	// 정말 null이 아니라는 걸 장담할 수 있다면 아래와 같이 느낌표를 붙일 수 있다.
	const button2 = document.querySelector("class2")!;
}
