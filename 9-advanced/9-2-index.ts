{
	const obj = {
		name: "jake",
	};

	type Animal = {
		name: string;
		age: number;
		gender: "male" | "female";
	};

	type Name = Animal["name"];
	const petName: Name = "coco";

	type Gender = Animal["gender"];

	// 객체 형태의 타입이라면 keyof 키워드를 사용해서 해당 타입의 키 값들로
	// 유니언 타입을 새롭게 만들 수도 있다.
	type Keys = keyof Animal; // 'name', 'age', 'gender'

	const text: Keys = "name";

	type Person = {
		name: string;
		gender: Animal["gender"];
	};
	const person: Person = {
		name: "angel",
		gender: "female",
	};
}
