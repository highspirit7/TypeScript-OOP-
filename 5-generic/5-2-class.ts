// either : A or B
interface Either<L, R> {
	left: () => L;
	right: () => R;
}

// 이렇게 제네릭을 잘 활용하면 더 유연하고 활용성 높은 클래스도 만들 수 있다.
// 클래스를 사용하는 사용자가 필요한 타입을 부여해 인스턴스를 만들 수 있게 된다.
class SimpleEither<L, R> implements Either<L, R> {
	constructor(private leftValue: L, private rightValue: R) {}

	left(): L {
		return this.leftValue;
	}

	right(): R {
		return this.rightValue;
	}
}

const either: Either<number, number> = new SimpleEither(4, 5);

either.left();
either.right();

const myTennisStyle: Either<string, string> = new SimpleEither("two hands", "one hand");

console.log(myTennisStyle.left());
console.log(myTennisStyle.right());


