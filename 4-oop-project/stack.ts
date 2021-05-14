interface Stack {
	readonly size: number;
	push(value: string): void;
	pop(): string;
}

type StackNode = {
	// 한 번 생성되면 값이 변하지 않도록 하기 위해 readonly 추가
	readonly value: string;
	readonly next?: StackNode;
};

class LinkedStackList implements Stack {
	// 내,외부에서 접근하는 이름이 같을 때 내부에서 쓰이는 곳에 underscore를 보통 붙인다.
	private _size: number = 0;

	// The optional parameters will have value as undefined when unused.
	private head?: StackNode;

	constructor(private capacity: number) {}

	get size() {
		return this._size;
	}

	push(value: string) {
		if (this.size === this.capacity) {
			throw new Error("Stack is full!");
		}

		const node: StackNode = {
			value,
			next: this.head,
		};

		this.head = node;

		this._size++;
	}

	pop(): string {
		// null == undefined ==> true. So, head가 null이든 undefined 이던 다 캐치하기 위해
		// '===' 아닌 '==' 사용
		if (this.head == null) {
			throw new Error("Nothing in Stack!");
		}

		const node: StackNode = this.head;
		this.head = node.next;

		this._size--;

		return node.value;
	}
}

const stack = new LinkedStackList(3);
stack.push("jake 1");
stack.push("julie 2");
stack.push("antoine 3");

while (stack.size > 0) {
	console.log(stack.pop());
}
