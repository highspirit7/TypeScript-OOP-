/** Favor COMPOSITION over inheritance!
 *  Composition 이란?
 *  사전적 의미로는 구성.
 *  다시 말하면 필요한 것들을 하나한 가져와서 조립하는 것을 말한다.
 * */

{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface MilkFrother {
		addMilk(cup: CoffeeCup): CoffeeCup;
	}

	interface SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup;
	}
	// 컴포지션의 단점
	// 현재 SweetCaffeLatteMachine 클래스는 강하게 CheapMilkSteamer,
	// AutomaticSugarMixer와 커플링되어져 있다.
	// 다른 설탕 제조기, 다른 우유 거품기 클래스가 등장하고 그것들이 필요해지면
	// 업데이트할 부분이 많아지는 것이다.

	// Solution
	// 그래서 위와 같이 만들어진 인터페이스를 따라서 클래스가 구현되게 하면
	// 나중에 우리가 원하는 다른 클래스(부품)로 바꿔가면서 필요한 곳에서 이용할 수 있다.

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		private coffeeBeans: number = 0; // instance (object) level

		constructor(coffeeBeans: number, private sugar: SugarProvider, private milk: MilkFrother) {
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
			let coffee = this.extract(shots);
			coffee = this.sugar.addSugar(coffee);
			coffee = this.milk.addMilk(coffee);
			return coffee;
		}
	}

	// 아래와 같이 각 기능별로 클래스를 따로 만들어서 필요한 곳에서 가져다 쓸 수 있다.
	// 이것이 바로 'composition'

	// 싸구려 우유 거품기 클래스
	class CheapMilkSteamer implements MilkFrother {
		addMilk(cup: CoffeeCup): CoffeeCup {
			console.log("Steaming some milk... 🥛");
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	// 고급 우유 거품기 클래스
	class FancyMilkSteamer implements MilkFrother {
		addMilk(cup: CoffeeCup): CoffeeCup {
			console.log("Fancy steaming some milk... 🥛");
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	// 차가운 우유 거품기 클래스
	class ColdMilkSteamer implements MilkFrother {
		addMilk(cup: CoffeeCup): CoffeeCup {
			console.log("Cold steaming some milk... 🥛");
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	class NoMilk implements MilkFrother {
		addMilk(cup: CoffeeCup): CoffeeCup {
			return {
				...cup,
				hasMilk: false,
			};
		}
	}

	// 사탕수수 설탕 추가 클래스
	class SugarcaneMixer implements SugarProvider {
		private getSugar() {
			console.log("Getting some sugar from sugar cane :)");
			return true;
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();

			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}

	// 각설탕 추가 클래스
	class CubeSugarMixer implements SugarProvider {
		private getSugar() {
			console.log("Getting some sugar from cube sugars 🍬");
			return true;
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();

			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}

	class NoSugar implements SugarProvider {
		addSugar(cup: CoffeeCup) {
			return {
				...cup,
				hasSugar: false,
			};
		}
	}

	// 우유 제조기 옵션
	const cheapMilkMaker = new CheapMilkSteamer();
	const fancyMilkMaker = new FancyMilkSteamer();
	const coldMilkMaker = new ColdMilkSteamer();
	const noMilk = new NoMilk();

	// 설탕 추가 옵션
	const sugarcaneSugar = new SugarcaneMixer();
	const cubeSugar = new CubeSugarMixer();
	const noSugar = new NoSugar();

	// 달콤한 커피 오브젝트
	const sugarcaneSweetCoffeeMaker = new CoffeeMachine(22, sugarcaneSugar, noMilk);
	// 설탕과 우유를 위한 클래스들을 따로 제작해두었기에 더이상 이름이 길고 복잡한 클래스를 사용할
	// 필요가 없다. 애초에 만들었던 CoffeeMachine 클래스에 설탕과 우유 옵션을 원하는대로
	// 사용하여 커피메이커 오브젝트를 만들어내면 된다.
	// const cubesugarSweetCoffeeMaker = new SweetCoffeeMaker(22, cubeSugar);

	// 라떼 오브젝트
	const latteMachine = new CoffeeMachine(22, noSugar, cheapMilkMaker);
	const coldLatteMachine = new CoffeeMachine(22, noSugar, coldMilkMaker);
	const fancyLatteMachine = new CoffeeMachine(22, noSugar, fancyMilkMaker);

	// 달콤한 라떼 오브젝트
	const sweetLatteMachine1 = new CoffeeMachine(22, sugarcaneSugar, cheapMilkMaker);
	const sweetLatteMachine2 = new CoffeeMachine(22, cubeSugar, cheapMilkMaker);
	const sweetIceLatteMachine1 = new CoffeeMachine(22, sugarcaneSugar, coldMilkMaker);
	const sweetIceLatteMachine2 = new CoffeeMachine(22, cubeSugar, coldMilkMaker);

	console.log(sugarcaneSweetCoffeeMaker.makeCoffee(1));
	console.log(coldLatteMachine.makeCoffee(2));
	console.log(sweetLatteMachine2.makeCoffee(1));
}

/**
 * Ellie's insight
 * 상속과 컴포지션은 어느 하나가 우월한 그런 관계가 아니다.
 * 상속이 필요한 경우도 있다. 다만 상속의 깊이가 너무 깊다면
 * 컴포지션을 이용하여 대체할 수는 없는지
 * 어떻게 컴포지션을 이용하여 확장 가능하고 재사용성이 높고 유지보수가 쉬운 
 * 퀄리티 높은 코드를 짤 수 있는지 고민해보는 것이 중요하다.
 * 다만, 오버엔지니어링하는 것은 좋지 않다!!
 * 일정이 타이트하다거나 확장될 가능성도 거의 없는데 위와 같은 고민을 깊게 하는 것도 문제다.
 * 적정한 밸런스를 잘 지켜 코딩하는 센스도 필요하다.
 */