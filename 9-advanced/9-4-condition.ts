type Check<T> = T extends string ? boolean : number;
type Type1 = Check<string>; // boolean
type Type2 = Check<boolean>; // number

// 아래 예시에서는 삼항연산자처럼 생긴 conditional types가 5번 연속으로 연결되어 있다.
// 앞선 5개 타입에 모두 해당하지 않게 되면 무조건 object 타입으로 정해진다.
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>;
('string');
type T1 = TypeName<'a'>;
('string');
type T2 = TypeName<() => void>;
('function');

/**
 * Conditional types take a form that looks a little like conditional expressions
 * (condition ? trueExpression : falseExpression) in JavaScript:
 */