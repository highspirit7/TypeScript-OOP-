{
	/**
	 * Intersection Types: &
	 * 다양한 타입들을 하나로 묶어서 선언
	 */

	type Student = {
		name: string;
		grade: number;
	};

	type Worker = {
		companyName: string;
		work: () => void;
	};

	// or이 아닌 and 연산자로 다양한 타입을 묶을 수 있다.
	function internWork(person: Student & Worker) {
		console.log(person.name);
		console.log(person.grade);

		console.log(person.companyName);
		console.log(person.work());
	}

	// 묶인 모든 타입들의 속성이 제대로 갖춰진 객체가 전달되어야 한다.
	internWork({
		name: "Jake",
		grade: 3.69,
		companyName: "OA",
		work: () => {
			console.log("coding..");
		},
	});
}
