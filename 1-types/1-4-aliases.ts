{
	/**
	 * Type Aliases
	 */

	type Text = string;
	const name: Text = "jake";
	const gender: Text = "male";

	type Num = number;
	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: "jake",
		age: 32,
		// gender: "male",
		// the one above is not assignable to to type 'Student'.
	};

	/**
	 * String Literal Types
	 * => string 값 자체가 타입이 된다.
	 */

	type Name = "name";
	let jakeName: Name;
	// jakeName = 'jake';
	// the code above woul make an error
	jakeName = "name"; // only possible to assign string "name"
}
