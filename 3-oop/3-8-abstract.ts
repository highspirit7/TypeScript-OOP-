{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	abstract class CoffeeMachine implements CoffeeMaker {
		// class level : static 예약어를 붙이면 인스턴스(오브젝트)를 만들 때마다 생성되지 않는다.
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		// instance(object) level : 인스턴스를 만들 때마다 생성된다.
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than 0");
			}
			this.coffeeBeans += beans;
		}

		clean() {
			console.log("cleaning the machine...🧼");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... 🔥");
		}

		// 자식 클래스에서 구현되는 세부 로직을 다르게 해야하는 메소드라면 아래와 같이 abstract를 붙여서
		// 정의하면 된다.
		// 자식 클래스에서 이렇게 abstract가 붙은 메소드를 구현하지 않으면 에러가 발생한다.
		protected abstract extract(shots: number): CoffeeCup;

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
      // 아래의 extract 메소드는 자식 클래스들에서 각각 구현되는대로 실행된다.
			return this.extract(shots);
		}
	}

	class CaffeLatteMachine extends CoffeeMachine {
		// 부모클래스의 생성자에 beans가 필요하므로 똑같이 자식클래스 생성자에서도 받아와서
		// super로 전달해주어야 한다.
		// 그리고 생성할 때 받고 바뀌지 않는 값은 readonly를 아래와 같이 붙여줄 수 있다.
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);
		}
		private steamMilk(): void {
			console.log("Steaming some milk... 🥛");
		}

		protected extract(shots: number) {
			this.steamMilk();

			return {
				shots,
				hasMilk: true,
			};
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		constructor(beans: number) {
			super(beans);
		}

		private addSugar(): void {
			console.log(`added some sugar!`);
		}

		protected extract(shots: number) {
			this.addSugar();

			return {
				shots,
				hasSugar: true,
			};
		}
	}

	const machines: CoffeeMaker[] = [
		new CaffeLatteMachine(16, "ABC123"),
		new SweetCoffeeMaker(42),
		// CoffeeMachine은 추상 클래스이기에 직접적으로 인스턴스를 생성할 수 없다.
		// new CoffeeMachine(31),
		new CaffeLatteMachine(15, "ABC456"),
		new SweetCoffeeMaker(16),
	];

	machines.forEach((machine) => {
		console.log("=================");

		machine.makeCoffee(2);
	});
}
