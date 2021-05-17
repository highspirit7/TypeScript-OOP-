{
	function checkNotNullBad(arg: number | null): number {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}

  // 여러 타입을 허용하고 싶을 때 any를 사용할 수 있다.
  // 그러나 이렇게 any를 사용하게 되면 함수의 인자로 어떤 타입이 들어갔고 어떤 타입의 값이 반환되는지
  // 알 수 없다. any는 타입 검사 자체를 무력화하기 때문이다.
	function checkNotNullAnyBad(arg: any | null): any {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}
	const result = checkNotNullAnyBad(123);

  // 제네릭에 들어가는 타입은 보통 길게 쓰지 않는다.
  // 제네릭을 사용한 아래 함수를 보게 되면 이 함수는 인자로 T or null 타입을 받고 T 타입의 값을
  // 리턴하는 것을 알 수 있다.
  // 아래와 같이 제네릭을 사용하면 함수의 인자값의 타입과 리턴값이 타입이 동일한지도 검증할 수 있다.
  // 이것이 제네릭을 사용하는 이유
	function checkNotNull<T>(arg: T | null): T {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}
	const number = checkNotNull(123);
	const boal: boolean = checkNotNull(true);
}
