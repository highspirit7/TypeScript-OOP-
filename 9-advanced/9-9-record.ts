type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

/**
 * 제네릭 안에서 접근하는 첫번째 타입을 key로, 두번째 타입을 해당 key의 타입으로
 * 묶고 싶을 때 Record를 사용할 수 있다.
 * Record 타입을 활용하여 모든 페이지에 필요한 title 데이터의 타입이
 * 설정되도록 아래 예시에서 구현되었다.
 */
const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};

/**
 * 수많은 여러가지 다른 유틸리티 타입들이 있다.
 * 아래 Capitalize처럼 첫글자만 대문자로 바꾸어주는 타입도 있고,
 * 아예 전체 글자를 소문자나 대문자로 치환하는 타입도 있다.
 * 특정 함수의 리턴값을 타입으로 만들어주는 타입(ReturnType)도 있다.
 */
type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'