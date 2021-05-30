{
	type Video = {
		title: string;
		author: string;
	};

	/**
	 * 특정 타입의 optional, readOnly 용 타입을 만들고 싶으면 아래와 같이 할 수 있다.
	 * 그러나 원본 타입이 변경되면 그에 맞게 파생된 아래 타입들을 일일이 업데이트해주어야 한다.
	 */
	// type VideoOptional = {
	//   title?: string;
	//   author?: string;
	// }

	// type VideoReadONly = {
	//   readonly title: string;
	//   readonly author: string;
	// }

	type Optional<T> = {
		// 대괄호 안에서 아래와 같이 in 키워드를 이용하면
		// for ...in 루프처럼 객체 타입의 각각의 키에 접근할 수 있다.
		[P in keyof T]?: T[P];
	};

	type ReadOnly<T> = {
		readonly [P in keyof T]: T[P];
	};

	type VideoOptional = Optional<Video>;

	type Animal = {
		name: string;
		age: number;
	};
	const animal: Optional<Animal> = {
		// 모든 요소들이 optional이기에 이렇게 특정 요소만 가져도 문제 없다.
		name: 'dog',
	};
	animal.name = 'puppy';

	const video: ReadOnly<Video> = {
		title: 'hi',
		author: 'jake',
	};
	// readOnly이기에 아래 코드는 에러⛔️ 발생!!!
	// video.author = 'jin';

	type Nullable<T> = {
		[P in keyof T]: T[P] | null;
	};
	const nullObj: Nullable<Video> = {
		title: 'hallo',
		author: null,
	};

	// 실제 타입스크립트 문서에 있는 것을 Ellie 님이 가져 온 것.
	type Proxy<T> = {
		get(): T;
		set(value: T): void;
	};

  // 이렇게 맵 타입을 활용해서 특정 타입이 설정된 데이터를 Proxy라는 또 다른 타입으로 감쌀 수 있다.
	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>;
	};
}
