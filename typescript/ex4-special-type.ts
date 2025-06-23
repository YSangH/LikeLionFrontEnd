let names = ["alice", "bob", "chalie"];
let age = [25, 27, 31];

for (let name of names) {
  console.log(name.length);
}

let everyThing: any = [1, 5, "Hello", true, { key: "value" }];
console.log(everyThing[3].length);

// any타입(권장하지 않음)

let everyThing1: unknown = [1, 5, "Hello", true, { key: "value" }];

// if (typeof everyThing1[2] === "string") {
//   console.log(everyThing[2].length);
// }

// unknown타입은 조건을 걸어야 출력된다.

console.log((everyThing1[2] as string).length);
// as 타입으로 조건 없이 unknown타입이 출력된다.
