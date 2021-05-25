{
	type NetworkErrorState = {
		result: "fail";
		reason: "offline" | "down" | "timeout";
	};

	type SuccessState = {
		result: "success";
	};

	type ResultState = SuccessState | NetworkErrorState;

	const isConnected = true;
	let errorReason = "offline";

	class NetworkClient {
		tryConnect(): ResultState {
			if (isConnected) return { result: "success" };
			else {
				switch (errorReason) {
					case "offline":
						return {
							result: "fail",
							reason: "offline",
						};
					case "down":
						return {
							result: "fail",
							reason: "down",
						};
					case "timeout":
						return {
							result: "fail",
							reason: "timeout",
						};
					default:
						return {
							result: "fail",
							reason: "offline",
						};
				}
			}
		}
	}

	/**
   * 성공하는 상태와 실패하는 상태를 미리 타입으로 잘 정리해놓으면 안정적으로 예상 가능하게
   * 프로그래밍을 할 수 있다.
   * 그리고 에러 케이스를 잘 정리해놓으면 여러 케이스에 따라 적절한 메세지를 사용자에게 알려주게
   * 할 수 있다. 즉 사용자에게 더 나은 UX를 제공할 수 있게 된다.
	 */
}
