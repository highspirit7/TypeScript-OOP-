{
	/**
	 * Union Types: OR
	 * 발생할 수 있는 모든 케이스 중 하나에 해당하는 타입을 만들어야 할 때 사용.
	 */

	type Direction = "left" | "right" | "up" | "down";

	function move(direction: Direction) {
		console.log(direction);
	}

	move("down");
	move("right");

	type shoesSize = 250 | 260 | 270 | 280;
	const jakeShoes: shoesSize = 280;

	type SuccessState = {
		response: {
			body: string;
		};
	};

	type FailState = {
		errorMsg: string;
	};

	type LoginState = SuccessState | FailState;

	// function login -> success, fail
	function login(): LoginState {
		return {
			response: {
				body: "logged in successfully",
			},
		};
	}

	// in 연산자 : in 연산자는 명시된 속성이 명시된 객체에 존재하면 true를 반환합니다.
	// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in
	function printLoginState(state: LoginState) {
		if ("errorMsg" in state) {
			console.log(`🥲 ${state.errorMsg}`);
		} else {
			// LoginState 타입은 두가지 케이스만 가지고 있는 유니온 타입이기에 한가지 타입이 위와 같이 걸러지면 나머지 타입은
			// 작성시 자동으로 추천해준다.
			console.log(`👏🏼 ${state.response.body}`);
		}
	}
}
