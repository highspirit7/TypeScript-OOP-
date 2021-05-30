{
	type ToDo = {
		title: string;
		description: string;
		label: string;
		priority: 'high' | 'low';
	};

	function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
		return {
			...todo,
			...fieldsToUpdate,
		};
	}

	const todo1: ToDo = {
		title: 'learn TS',
		description: 'please study',
		label: 'coding',
		priority: 'high',
	};
	const updatedTodo1 = updateTodo(todo1, { priority: 'low' });
	console.log(updatedTodo1);
}
