{
	type Milk = "milk" | "noMilk";
	type Syrup = "vanilla" | "hazelnut" | "caramel" | "noSyrup";
	type CoffeeCup = {
		shots: number;
		milk: Milk;
		syrup: Syrup;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number, milk: Milk, syrup: Syrup): CoffeeCup;
	}

	interface CommercialCoffeeMaker {
		makeCoffee(shots: number, milk: Milk, syrup: Syrup): CoffeeCup;
		addPackOfCoffeeBeans(numberOfPack: number): void;
		addIce(): void;
	}

	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
		private static BEANS_GRAM_PER_SHOT = 7;

		private totalCoffeeBeans: number = 0;

		private constructor(totalCoffeeBeans: number) {
			this.totalCoffeeBeans = totalCoffeeBeans;
		}

		static makeMachineWithoutInstance(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
		}

		addPackOfCoffeeBeans(numberOfPack: number) {
			if (numberOfPack > 0) {
				const onePackofCoffeeBeans = 50;

				this.totalCoffeeBeans += onePackofCoffeeBeans * numberOfPack;
			} else {
				throw new Error("Not valid number for the pack of coffee beans!");
			}
		}

		clean() {
			console.log("cleaning the machine...🧽");
		}

		addIce() {
			console.log("added some pieces of ice 🧊🧊🧊");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots} shots`);

			if (this.totalCoffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
				throw new Error("Not enough coffee beans!!!");
			}

			this.totalCoffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... 🔥");
		}

		private extract(shots: number, milk: Milk, syrup: Syrup): CoffeeCup {
			console.log(`extracting ${shots} shots of coffee`);

			return {
				shots,
				milk,
				syrup,
			};
		}

		// 사용자 입장에서 구체적으로 어떤 메소드를 가지고 어떤 순서로 커피를 만드는지 알기 어렵기에
		// 커피를 만들기 위한 여러가지 메소드들을 private으로 해놓고 이렇게 함수 하나에 다 합쳐서
		// 추상화를 할 수도 있다.
		// 여기서 '추상화'의 의미 : 간단하게 정말 필요한 함수만 노출해서 사용자에게 제공되는
		// 양식을 더 간단하게 하는 것
		makeCoffee(shots: number, milk: Milk, syrup: Syrup): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();

			return this.extract(shots, milk, syrup);
		}
	}

	// 클래스 자체를 타입으로 설정하게 되면 클래스 내부의 모든 퍼블릭 메소드에 접근 가능.
	const maker1: CoffeeMachine = CoffeeMachine.makeMachineWithoutInstance(100);
	maker1.addPackOfCoffeeBeans(2);

	// 하지만 아래와 같이 인터페이스로 타입을 설정하게 되면 인터페이스에서 정의된 것들만 접근하여
	// 사용할 수 있게 된다.
	const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachineWithoutInstance(100);
	maker2.addPackOfCoffeeBeans(2);
	maker2.makeCoffee(2, "milk", "caramel");
	maker2.addIce();
	// clean 함수를 인터페이스에 정의해놓지 않아 아래 코드는 에러를 발생시키게 된다.
	// maker2.clean();

	class AmateurCoffeeLover {
		constructor(private machine: CoffeeMaker) {}

		makeCoffee() {
			const coffee = this.machine.makeCoffee(1, "noMilk", "vanilla");
			console.log(coffee);
		}
	}

	class ProBarista {
		constructor(private machine: CommercialCoffeeMaker) {}

		makeCoffee() {
			const coffee = this.machine.makeCoffee(2, "noMilk", "vanilla");
			console.log(coffee);
			this.machine.addPackOfCoffeeBeans(2);
			this.machine.addIce();
		}
	}
  // AmateurCoffeeLover 클래스나 ProBarista 클래스는 각각 다른 커피머신 인터페이스를
  // 받아 생성되기 때문에 CoffeeMachine 클래스 전체 내부에 얼마나 많은 다른 함수들이
  // 있는지 신경 쓸 필요 없다.
  // 그래서 이러한 클래스를 사용하는 사용자들은 해당 클래스의 인터페이스만 잘 파악하면 
  // 어떻게 사용할 수 있는지 알 수 있다.

	const maker3: CoffeeMachine = CoffeeMachine.makeMachineWithoutInstance(32);
	const amateur = new AmateurCoffeeLover(maker3);
	const pro = new ProBarista(maker3);
	pro.makeCoffee();
}
