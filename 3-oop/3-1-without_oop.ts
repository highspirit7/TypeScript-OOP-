{
	type Milk = "milk" | "noMilk";
	type Syrup = "vanilla" | "hazelnut" | "caramel" | "noSyrup";
	type CoffeeCup = {
		shots: number;
		milk: Milk;
		syrup: Syrup;
	};

	const BEANS_GRAM_PER_SHOT = 7;
	let totalCoffeeBeans: number = 0;

	function makeCoffee(shots: number, milk: Milk, syrup: Syrup): CoffeeCup {
		if (totalCoffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
			throw new Error("Not enough coffee beans!");
		}

		totalCoffeeBeans -= shots * BEANS_GRAM_PER_SHOT;

		return {
			shots,
			milk,
			syrup,
		};
	}

	totalCoffeeBeans = 100;
	const sungjinCoffeeAfterLunch = makeCoffee(1, "milk", "hazelnut");
	console.log(sungjinCoffeeAfterLunch);
}
