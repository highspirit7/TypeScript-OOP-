{
	/**
	 * Type Assertions π©
	 */

	// κ²°λ‘ μ μΌλ‘λ νΌνλ κ²μ΄ μ’λ€.
	// μ‘°κΈμ΄λΌλ Type Assertionμ νΌν  μ μλ λ°©λ²μ κ³ λ―Όν΄λ³΄μ.
	// νμ§λ§ νμμ€ν¬λ¦½νΈλ μλ°μ€ν¬λ¦½νΈμ μ°λλμ΄ μ¬μ©λλ κ²½μ°κ° μκΈ° λλ¬Έμ
	// λΆκ°νΌνκ² μ¨μΌνλ κ²½μ°λ μλ€.

	// μλ₯Ό λ€μ΄ μλ°μ€ν¬λ¦½νΈκ° μ κ³΅νλ ν¨μ μ€μ λ¬΄μ‘°κ±΄ μ€νΈλ§μ
	// λ¦¬ν΄ν  κ²μ΄λΌκ³  νμ ν  μ μλ ν¨μκ° μλ€κ³  ν΄λ³΄μ.
	function jsStrFunction(): any {
		return "Bonjour";
	}

	const result = jsStrFunction();
	// λ¦¬ν΄ κ° νμμ΄ anyμ΄μ§λ§ μλμ κ°μ λ°©μμΌλ‘ νμμ κ°μ λ‘ ν λΉν  μ μλ€.
	// κ·Έλ¬λ λ§μ½μ stringμ λ¦¬ν΄νλ ν¨μκ° μλμλ€κ³  νλ€λ©΄
	// μ½λλ₯Ό μμ±νλ μμ μμ μλ¬λ₯Ό λ°μμν€μ§λ μλλ€.
	console.log((result as string).length);
	console.log((<string>result).length);

	// μ λ§ νμμ μ₯λ΄ν  μ μμλλ§ μ¬μ©νμ. κ·Έλ μ§ μμΌλ©΄ μλ κ²½μ°μ²λΌ νλ‘μ νΈκ°
	// λμκ°μ§ μκ² λλ μλ¬λ₯Ό λΌ μλ μλ€.
	const wrong: any = 8;
	(wrong as number[]).push(1); //π±

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	// λ¬΄μ‘°κ±΄ λ°°μ΄μΌ κ²μ΄λΌκ³  νμ ν  μ μμλ μλμ κ°μ΄ λλνλ₯Ό λΆμ¬μ μ¬μ©ν  μ μλ€.
	// λ¬΄μ‘°κ±΄ nullμ΄ μλλΌκ³  μ μνλ κ².
	numbers!.push(8);

	const button = document.querySelector("class");
	if (button) {
		// cuz button variable can be null.
		button.nodeValue;
	}

	// μ λ§ nullμ΄ μλλΌλ κ±Έ μ₯λ΄ν  μ μλ€λ©΄ μλμ κ°μ΄ λλνλ₯Ό λΆμΌ μ μλ€.
	const button2 = document.querySelector("class2")!;
}
