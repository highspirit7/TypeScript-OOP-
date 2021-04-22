{
	type Milk = "milk" | "noMilk";
	type Syrup = "vanilla" | "hazelnut" | "caramel" | "noSyrup";
	type CoffeeCup = {
		shots: number;
		milk: Milk;
		syrup: Syrup;
	};

	class CoffeeMaker {
		// class level : static 예약어를 붙이면 인스턴스(오브젝트)를 만들 때마다 생성되지 않는다.
		static BEANS_GRAM_PER_SHOT = 7;

		// instance(object) level : 인스턴스를 만들 때마다 생성된다.
		totalCoffeeBeans: number = 0;

		constructor(totalCoffeeBeans: number) {
			this.totalCoffeeBeans = totalCoffeeBeans;
		}

    // static은 이렇게 함수에 붙여서 사용할 수도 있다. 그러면 인스턴스를 따로 생성하지 않아도 
    // 해당 함수에 접근할 수 있게 된다.
		static makeMachineWithoutInstance(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		makeCoffee(shots: number, milk: Milk, syrup: Syrup): CoffeeCup {
			// static 변수의 경우 this가 아닌 클래스명으로 접근할 수 있다.
			if (this.totalCoffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}

			this.totalCoffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

			return {
				shots,
				milk,
				syrup,
			};
		}
	}

	const maker1 = new CoffeeMaker(100);
	console.log(maker1);
	console.log(maker1.makeCoffee(2, "milk", "vanilla"));

	const maker2 = CoffeeMaker.makeMachineWithoutInstance(100);
	console.log(maker2);
}
