{
	class NetworkClient {
		tryConnect(): void {
			throw new Error("no network!");
		}
	}

	class UserService {
		constructor(private client: NetworkClient) {}

		login() {
			this.client.tryConnect();
		}
	}

	class App {
		constructor(private userService: UserService) {}

		run() {
			try {
				// 아래 함수에서 문제가 생겨 에러가 발생한다면
				// UserService 클래스에 문제가 있을 수도 있고 NetworkClient 클래스에
				// 문제가 있을 수도 있다.
				this.userService.login();
			} catch (error) {
				// 하지만 최종적으로 유저와 가장 맞닿아 있는 지점에서 이렇게 try catch문을 사용한
				// 이유는 이 지점에서 에러를 캐치하면 의미 있게 처리할 수 있기 때문이다.
				// 가령, 에러를 설명하는 모달창을 여기서 띄워주게 할 수도 있다.
			}
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);

	const app = new App(service);
	app.run();

	/**
	 * Ellie's main point
	 * try catch handling을 할 때 과연 여기서 하는 것이 의미있게 처리를 하는 것인지
	 * 잘 고민해볼 필요가 있다. 가능한 가장 우아하게 처리할 수 있는 곳에서 catch를 하는 것이 중요!
	 */
}
