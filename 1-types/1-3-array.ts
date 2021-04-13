{
	// Array : there are 2 ways to type array

	// option 1
	const GOAT: string[] = ["federer", "nadal", "djokovic"];
	// option 2
	const grandSlamTitles: Array<number> = [20, 20, 18];

	// readonly를 사용하기 위해서는 only option 1 is available!
	function printArray(goat: readonly string[]) {
		// readonly를 사용하면 아래와 같은 코드는 에러 발생.
		// 불변성을 유지하기 위해 readonly를 사용할 일이 많다.
		// goat.push("murray");
	}

	// Tuple : 서로 다른 타입을 함께 가질 수 있는 배열
	let tennisPlayer: [string, number];
	tennisPlayer = ["Novak Djokovic", 1987];
	tennisPlayer[0]; // Novak Djokovic
	tennisPlayer[1]; // 1987

	// 인덱스로 접근하는 것은 가독성이 떨어진다.
	// Using tuple is not recommended. Can be replaced by interface, type alias, class
	const [name, yearOfBirth] = tennisPlayer;

  // Example of Tubple
  // 리액트 useState 사용할 때 state용 변수와 세팅하는 함수를 담은 배열이 리턴되는데,
  // 이것이 바로 튜플의 좋은 사용 예시이다.

  // 무언가 동적으로 리턴하는데 클래스나 인터페이스로 묻기가 애매하고 
  // 관련된 다른 타입의 데이터를 묶어서 사용자가 이름을 정의해서 써야할 경우에는 유용할 수 있다.
  // 그 외의 경우라면 interface나 type alias로 쓸 수 있을지 잘 생각해야 한다.
}
