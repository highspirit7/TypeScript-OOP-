// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
	if (fileName === "not exist!💩") {
		throw new Error(`file not exist! ${fileName}`);
	}
	return "file contents🗒";
}

function closeFile(fileName: string) {
	//
}


/**
 * 
 * finally 필요한 이유
 * catch 문 안에서 뭔가를 처리할 때 다른 에러가 발생하거나 혹은 리턴이 되면
 * catch 문 스코프 바깥에 있고 나중에 작성된 코드는 실행되지 않게 된다.
 * try하는 것과 연관이 있어서 항상 마지막에 마무리해야하는 것이 있다면 finally가 필요!
 */

function run() {
	const fileName = "not exist!💩";

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
