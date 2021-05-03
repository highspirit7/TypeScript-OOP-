{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		private coffeeBeans: number = 0; // instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
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

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... ☕️`);
			return {
				shots,
				hasMilk: false,
			};
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
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
		makeCoffee(shots: number): CoffeeCup {
			// super를 통해 부모 클래스에서 상속받아 메소드를 사용할 수 있다.
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
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
		makeCoffee(shots: number): CoffeeCup {
			// super를 통해 부모 클래스에서 상속받아 메소드를 사용할 수 있다.
			const coffee = super.makeCoffee(shots);
			this.addSugar();
			return {
				...coffee,
				hasSugar: true,
			};
		}
	}

	// CoffeMachine(부모 클래스)이 CoffeeMaker 인터페이스를 구현하고 있어서
	// 아래와 같이 타입 작성도 가능하다.
	const machines: CoffeeMaker[] = [
		new CoffeeMachine(32),
		new CaffeLatteMachine(16, "ABC123"),
		new SweetCoffeeMaker(42),
		new CoffeeMachine(31),
		new CaffeLatteMachine(15, "ABC456"),
		new SweetCoffeeMaker(16),
	];

  /** 다형성의 장점
   * 다양한 클래스들이 한 가지의 인터페이스를 구현하거나
   * 또는 동일한 부모클래스를 상속했을 때
   * 아래의 경우처럼 같은 함수를 클래스 종류 구분 없이 호출할 수 있다는 점
   */
    
	machines.forEach((machine) => {
		console.log("=================");

		machine.makeCoffee(2);
	});

  /** 다형성이란?
   * 하나의 인터페이스 혹은 같은 부모 클래스를 상속한 자식 클래스들이
   * 인터페이스와 부모 클래스에 있는 함수들을 다른 방식으로 다르게 구성함으로써
   * 다양함을 추구할 수 있는 것F
   */
}
