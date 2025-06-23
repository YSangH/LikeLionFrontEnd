// 제네릭 타입 : 내가 타입을 임의로 설정하고 지정한다. 보통은 <T>로 설정
function print<T>(value: T): void {
  console.log(`입력한 값은 ${value} 입니다.`);
}

print<string>("Hello World"); // Hello World
print<number>(42); // 42
