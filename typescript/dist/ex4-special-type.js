var names = ["alice", "bob", "chalie"];
var age = [25, 27, 31];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1.length);
}
var everyThing = [1, 5, "Hello", true, { key: "value" }];
console.log(everyThing[3].length);
// any타입(권장하지 않음)
var everyThing1 = [1, 5, "Hello", true, { key: "value" }];
// if (typeof everyThing1[2] === "string") {
//   console.log(everyThing[2].length);
// }
// unknown타입은 조건을 걸어야 출력된다.
console.log(everyThing1[2].length);
// as 타입으로 조건 없이 unknown타입이 출력된다.
