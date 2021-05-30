{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // 타입과 인터페이스 모두 객체와 클래스에 사용가능하다. 
  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 😆 only interfaces can be merged.
  // 위에서 같은 이름의 인터페이스를 만들었고 또 같은 이름의 인터페이스에 새로운 설정을 하게 되면
  // 알아서 merge된다.
  interface PositionInterface {
    z: number;
  }

  // 타입의 경우 인터페이스와는 다르게 같은 이름으로 또 접근하게 되면 에러가 발생한다.
  // type PositionType {
  // }

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  // 새로운 타입이나 유니온 타입은 인터페이스로 만들수는 없고 type alias로만 가능하다.
  type NumberType = number;
  type Direction = 'left' | 'right';

  /** 
   * 타입스크립트 초창기 버전에서는 타입과 인터페이스가 할 수 있는 것이 많이 달랐지만,
   * 시간이 지나면서 점점 비슷해지고 있다.
   */
}
