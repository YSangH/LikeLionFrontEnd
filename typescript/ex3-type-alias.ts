const User: { name: string; age: number } = { name: "John", age: 30 };
console.log(User.name);
// 객체 타입 정하는 방법

type user = {
  name: string;
  age: number;
};

const user1: user = { name: "Alice", age: 25 };
console.log(user1.name);
// 타입을 명시하고 여러 변수를 명시하고 싶을 때 사용
