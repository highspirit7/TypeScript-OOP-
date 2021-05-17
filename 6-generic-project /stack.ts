/**
 * string만 받게 되어있던 스택 생성 클래스를 다양한 타입의 데이터를 이용할 수 있게 제네릭을 사용하여
 * 수정하였다.
 * 재사용성이 필요한 클래스라면 이렇게 제네릭을 활용하는 것을 고려해볼 수 있다.
 */

interface Stack<T> {
	readonly size: number;
	push(value: T): void;
	pop(): T;
}

type StackNode<T> = {
	// 한 번 생성되면 값이 변하지 않도록 하기 위해 readonly 추가
	readonly value: T;
	readonly next?: StackNode<T>;
};

class LinkedStackList<T> implements Stack<T> {
	// 내,외부에서 접근하는 이름이 같을 때 내부에서 쓰이는 곳에 underscore를 보통 붙인다.
	private _size: number = 0;

	// The optional parameters will have value as undefined when unused.
	private head?: StackNode<T>;

	constructor(private capacity: number) {}

	get size() {
		return this._size;
	}

	push(value: T) {
		if (this.size === this.capacity) {
			throw new Error("Stack is full!");
		}

		const node: StackNode<T> = {
			value,
			next: this.head,
		};

		this.head = node;

		this._size++;
	}

	pop(): T {
		// null == undefined ==> true. So, head가 null이든 undefined 이던 다 캐치하기 위해
		// '===' 아닌 '==' 사용
		if (this.head == null) {
			throw new Error("Nothing in Stack!");
		}

		const node = this.head;
		this.head = node.next;

		this._size--;

		return node.value;
	}
}

const stack = new LinkedStackList<string>(3);
stack.push("jake 1");
stack.push("julie 2");
stack.push("antoine 3");

const stack2 = new LinkedStackList<number>(3);
stack2.push(123);
stack2.push(456);
stack2.push(789);

while (stack.size > 0) {
	console.log(stack.pop());
}

while (stack2.size > 0) {
	console.log(stack2.pop());
}
