{
	type Milk = "milk" | "noMilk";
	type Syrup = "vanilla" | "hazelnut" | "caramel" | "noSyrup";
	type CoffeeCup = {
		shots: number;
		milk: Milk;
		syrup: Syrup;
	};

	// public : 어디서든지 접근할 수 있으며 아무것도 안 붙이면 기본적으로 public.
	// private : 클래스 내부에서만 접근 가능.
	// protected : private과 비슷하지만, 자손 클래스에서도 접근이 가능.
	// 자바스크립트는 protected 필드를 지원하지 않지만, protected를 사용하면 편리한 점이 많기 때문에 이를 모방해서 사용하는 경우가 많습니다.
	class CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT = 7;

		private totalCoffeeBeans: number = 0;

		// 그래서 이런 경우에는 constructor에 private을 붙여서 new 키워드로 인스턴스 생성을 방지하고 항상 static 메소드를 이용할 수 있게 할 수 있다.
		private constructor(totalCoffeeBeans: number) {
			this.totalCoffeeBeans = totalCoffeeBeans;
		}

		// 보통 static 키워드를 붙여서(like makeMachineWithoutInstance function as below) 인스턴스를 만들 수 있는 함수를 제공한다면 생성자를 이용해서 생성하는 것을 금지하기 위한 것이 주된 목적이다.
		static makeMachineWithoutInstance(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		addPackOfCoffeeBeans(numberOfPack: number) {
			if (numberOfPack > 0) {
				const onePackofCoffeeBeans = 50;

				this.totalCoffeeBeans += onePackofCoffeeBeans * numberOfPack;
			} else {
				throw new Error("Not valid number for the pack of coffee beans!");
			}
		}

		makeCoffee(shots: number, milk: Milk, syrup: Syrup): CoffeeCup {
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

	const maker1 = CoffeeMaker.makeMachineWithoutInstance(100);
	maker1.addPackOfCoffeeBeans(2);
	console.log(maker1);
	console.log(maker1.makeCoffee(2, "milk", "vanilla"));
	console.log(maker1);
}
