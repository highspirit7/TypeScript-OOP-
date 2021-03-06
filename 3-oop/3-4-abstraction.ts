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
			console.log("cleaning the machine...๐งฝ");
		}

		addIce() {
			console.log("added some pieces of ice ๐ง๐ง๐ง");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots} shots`);

			if (this.totalCoffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
				throw new Error("Not enough coffee beans!!!");
			}

			this.totalCoffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... ๐ฅ");
		}

		private extract(shots: number, milk: Milk, syrup: Syrup): CoffeeCup {
			console.log(`extracting ${shots} shots of coffee`);

			return {
				shots,
				milk,
				syrup,
			};
		}

		// ์ฌ์ฉ์ ์์ฅ์์ ๊ตฌ์ฒด์ ์ผ๋ก ์ด๋ค ๋ฉ์๋๋ฅผ ๊ฐ์ง๊ณ  ์ด๋ค ์์๋ก ์ปคํผ๋ฅผ ๋ง๋๋์ง ์๊ธฐ ์ด๋ ต๊ธฐ์
		// ์ปคํผ๋ฅผ ๋ง๋ค๊ธฐ ์ํ ์ฌ๋ฌ๊ฐ์ง ๋ฉ์๋๋ค์ private์ผ๋ก ํด๋๊ณ  ์ด๋ ๊ฒ ํจ์ ํ๋์ ๋ค ํฉ์ณ์
		// ์ถ์ํ๋ฅผ ํ  ์๋ ์๋ค.
		// ์ฌ๊ธฐ์ '์ถ์ํ'์ ์๋ฏธ : ๊ฐ๋จํ๊ฒ ์ ๋ง ํ์ํ ํจ์๋ง ๋ธ์ถํด์ ์ฌ์ฉ์์๊ฒ ์ ๊ณต๋๋
		// ์์์ ๋ ๊ฐ๋จํ๊ฒ ํ๋ ๊ฒ
		makeCoffee(shots: number, milk: Milk, syrup: Syrup): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();

			return this.extract(shots, milk, syrup);
		}
	}

	// ํด๋์ค ์์ฒด๋ฅผ ํ์์ผ๋ก ์ค์ ํ๊ฒ ๋๋ฉด ํด๋์ค ๋ด๋ถ์ ๋ชจ๋  ํผ๋ธ๋ฆญ ๋ฉ์๋์ ์ ๊ทผ ๊ฐ๋ฅ.
	const maker1: CoffeeMachine = CoffeeMachine.makeMachineWithoutInstance(100);
	maker1.addPackOfCoffeeBeans(2);

	// ํ์ง๋ง ์๋์ ๊ฐ์ด ์ธํฐํ์ด์ค๋ก ํ์์ ์ค์ ํ๊ฒ ๋๋ฉด ์ธํฐํ์ด์ค์์ ์ ์๋ ๊ฒ๋ค๋ง ์ ๊ทผํ์ฌ
	// ์ฌ์ฉํ  ์ ์๊ฒ ๋๋ค.
	const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachineWithoutInstance(100);
	maker2.addPackOfCoffeeBeans(2);
	maker2.makeCoffee(2, "milk", "caramel");
	maker2.addIce();
	// clean ํจ์๋ฅผ ์ธํฐํ์ด์ค์ ์ ์ํด๋์ง ์์ ์๋ ์ฝ๋๋ ์๋ฌ๋ฅผ ๋ฐ์์ํค๊ฒ ๋๋ค.
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
  // AmateurCoffeeLover ํด๋์ค๋ ProBarista ํด๋์ค๋ ๊ฐ๊ฐ ๋ค๋ฅธ ์ปคํผ๋จธ์  ์ธํฐํ์ด์ค๋ฅผ
  // ๋ฐ์ ์์ฑ๋๊ธฐ ๋๋ฌธ์ CoffeeMachine ํด๋์ค ์ ์ฒด ๋ด๋ถ์ ์ผ๋ง๋ ๋ง์ ๋ค๋ฅธ ํจ์๋ค์ด
  // ์๋์ง ์ ๊ฒฝ ์ธ ํ์ ์๋ค.
  // ๊ทธ๋์ ์ด๋ฌํ ํด๋์ค๋ฅผ ์ฌ์ฉํ๋ ์ฌ์ฉ์๋ค์ ํด๋น ํด๋์ค์ ์ธํฐํ์ด์ค๋ง ์ ํ์ํ๋ฉด 
  // ์ด๋ป๊ฒ ์ฌ์ฉํ  ์ ์๋์ง ์ ์ ์๋ค.

	const maker3: CoffeeMachine = CoffeeMachine.makeMachineWithoutInstance(32);
	const amateur = new AmateurCoffeeLover(maker3);
	const pro = new ProBarista(maker3);
	pro.makeCoffee();
}
