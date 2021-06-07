class Counter {
	count = 0;
  // 사실 화살표 함수를 쓰면 this가 렉시컬 스코프로 결정되므로 따로 bind를 통해서 바인딩해줄 필요가 없다.
	increase = function () {
		console.log(this);
	};
}

const counter = new Counter();
counter.increase(); // Counter 클래스 출력

// caller에 아래와 같이 할당하면서 this가 가리켜야 할 곳을 읽어버렸다.
// 왜냐하면 let과 const로 선언한 변수는 Window에 등록되어져 있지 않으므로
// 이 caller를 호출하는 것은 Window도 아니고 그 어떤 오브젝트도 아니기에
// undefined가 호출한 것과 마찬가지인 것이다.
const caller = counter.increase;
caller(); // undefined

/** 함수는 최상위스코프에서 선언하면 윈도우 객체에 등록이 되어 Window.으로 접근할 수 있지만
 *  변수는 윈도우 객체에 등록되지 않는다.
 *  하지만, var 키워드로 만든 변수는 윈도우 객체에 등록된다.
 */

class Jake {}
const jake = new Jake();
jake.run = counter.increase;
jake.run(); // Jake 클래스 출력

const bindCaller = counter.increase.bind(Counter);
bindCaller();
