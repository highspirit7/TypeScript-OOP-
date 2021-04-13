{
	/**
	 * Enum
	 */
	// JavaScript에서 존재하지 않는 타입.
	// 여러가지에 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입.

	// TypeScript 가능하면 enum을 쓰지 않는 것이 좋다.

	// 아무것도 할당해주지 않으면 알아서 0부터 차례로 숫자들이 저장된다.
	enum Days {
		Monday, // 0
		Tuesday, // 1
		Wednesday, // 2
		Thursday, // 3
		Friday, // 4
		Saturday, // 5
		Sunday, // 6
	}

	console.log(Days.Monday);
	let day = Days.Saturday;

	// 이런식으로 다른 숫자를 할당해도 문제 없다. => enum의 가장 큰 문제
	day = 100;
	console.log(day);

	// 이런식으로 다른 값도 할당 가능.
	enum Days2 {
		Monday = "mon",
		Tuesday = "tue",
		Wednesday = "wed",
		Thursday = "thu",
		Friday = "fri",
		Saturday = "sat",
		Sunday = "sun",
	}

	console.log(Days2.Monday);

	type Days3 = "Monday" | "Tuesday" | "Wednesday";

	let dayOfWeek: Days3 = "Monday";

  // 아래와 같이 엉뚱한 값 할당 불가.
	// dayOfWeek = "jake";

  // 위 예시처럼 enum은 대부분의 케이스에서 유니온 타입으로 대체 가능.

  // 모바일 클라이언트에서 사용하는 네이티브 프로그래밍 언어에서는 유니온 타입 표현할 수 없다.
  // 하지만 웹 클라이언트에서는 굳이 enum 사용할 이유가 없어보인다. type을 이용하는 것을 추천.
}
