// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
	if (fileName === "not exist!π©") {
		throw new Error(`file not exist! ${fileName}`);
	}
	return "file contentsπ";
}

function closeFile(fileName: string) {
	//
}


/**
 * 
 * finally νμν μ΄μ 
 * catch λ¬Έ μμμ λ­κ°λ₯Ό μ²λ¦¬ν  λ λ€λ₯Έ μλ¬κ° λ°μνκ±°λ νΉμ λ¦¬ν΄μ΄ λλ©΄
 * catch λ¬Έ μ€μ½ν λ°κΉ₯μ μκ³  λμ€μ μμ±λ μ½λλ μ€νλμ§ μκ² λλ€.
 * tryνλ κ²κ³Ό μ°κ΄μ΄ μμ΄μ ν­μ λ§μ§λ§μ λ§λ¬΄λ¦¬ν΄μΌνλ κ²μ΄ μλ€λ©΄ finallyκ° νμ!
 */

function run() {
	const fileName = "not exist!π©";

	try {
		console.log(readFile(fileName));
	} catch (error) {
		console.log(`catched!!`);
		return;
	} finally {
		closeFile(fileName);
		console.log(`closed!`);
	}
}
run();
