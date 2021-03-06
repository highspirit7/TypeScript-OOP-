{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
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
			console.log("cleaning the machine...π§Ό");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... π₯");
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... βοΈ`);
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
    // λΆλͺ¨ν΄λμ€μ μμ±μμ beansκ° νμνλ―λ‘ λκ°μ΄ μμν΄λμ€ μμ±μμμλ λ°μμμ
    // superλ‘ μ λ¬ν΄μ£Όμ΄μΌ νλ€. 
    // κ·Έλ¦¬κ³  μμ±ν  λ λ°κ³  λ°λμ§ μλ κ°μ readonlyλ₯Ό μλμ κ°μ΄ λΆμ¬μ€ μ μλ€.
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);
		}
		private steamMilk(): void {
			console.log("Steaming some milk... π₯");
		}
		makeCoffee(shots: number): CoffeeCup {
      // superλ₯Ό ν΅ν΄ λΆλͺ¨ ν΄λμ€μμ μμλ°μ λ©μλλ₯Ό μ¬μ©ν  μ μλ€.
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
				hasMilk: true,
			};
		}
	}

	const machine = new CoffeeMachine(23);
	const latteMachine = new CaffeLatteMachine(23, "SSSS");
	const coffee = latteMachine.makeCoffee(1);
	console.log(coffee);
	console.log(latteMachine.serialNumber);
}
