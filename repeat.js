let members = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 35 },
  { name: "Eve", age: 40 },
];
const names = members
  // 25살 이상(25살 미포함)으로 필터링하고
  .filter((member) => member.age > 25)
  // 이름만 추출하고
  .map((member) => member.name)
  // 쉼표로 구분된 문자열로 변환하고
  .join(",");

// 결과 출력
console.log(names);

function createAsyncCounter() {
  let count = 0;
  return {
    start: function () {
      for (let i = 0; i < 3; i++) {
        setTimeout(function () {
          count++;
          console.log(`Async Counter: ${count}`);
        }, i * 100);
      }
    },
  };
}

const myAsyncCounter = createAsyncCounter();
myAsyncCounter.start();
