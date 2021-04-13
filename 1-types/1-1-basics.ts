{
	/**
	 * JavaScript
	 * Primitive: number, string, boolean, bigint, symbol, null, undefined
	 * Object: function, array...
	 */

	// please don't use the types with Dung emoji!

	// undefined
	// 값이 있는지 없는지 결정되지 않은 상태
	let age: number | undefined;
	age = 3;
	age = undefined;

	// 아래 함수처럼 리턴하는 값이 있거나 없는 경우에 undefined를 활용
	function find(): number | undefined {
		return undefined;
	}

	// null
	// 확실하게 값이 없다는 상태
	// 프로그래머의 입장에서 명시적으로 부재를 나타내고 싶다면 항상 null을 사용하는 것이 좋습니다.
	let person1: null; // 💩
	let person: string | null;

	// unknown 💩 : 무슨 타입이 들어올지 잘 모르겠다는 의미
	let unsure: unknown = 0;
	unsure = "she";
	unsure = true;

	// any 💩
	let anything: any = 0;
	anything = "bonjour";

	// unknown, any는 정말 불가피한 경우에만 사용해야!

	// void : 함수에서 아래와 같이 아무것도 리턴하지 않을때 사용. void는 생략할 수 있다. 그래서 스타일 가이드를 지정해서 거기에 맞게 따라가는 것이 좋을 것.
	function print(): void {
		console.log("bonjour");
		return;
	}

	let unusable: void = undefined; // 💩

	// never : 절대 리턴되는 것이 없는 함수에서 그러한 사실을 명시하기 위해 사용.
	function throwError(message: string): never {
		// put logic to send the message to server and make a log with it.
		throw new Error(message);
	}

	function neverEndingWhile(): never {
		while (true) {}
	}

	let neverEndinbVariable: never; // 💩

	// Object : 원시 타입 제외 모든 object 타입에 사용 가능
	let obj: Object;
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: "Jake" });
	acceptSomeObject({ animal: "dog" });
}
