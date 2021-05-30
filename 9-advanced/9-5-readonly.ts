{
	type ToDo = {
		title: string;
		description: string;
	};

	function displayTodo(todo: Readonly<ToDo>) {
    // 유틸리티 타입(이미 타입스크립트에서 만들어져있는)인 Readonly를 가져다 쓰면 
    // 아래 코드는 에러가 발생한다.
    // 이 함수는 display만을 하기 위한 함수이니 아래와 같이 todo내부 내용을 수정하는 일을
    // 막기 위해 Readonly 유틸리티 타입을 활용할 수 있다.
		// todo.title = 'yaya';
	}
}
