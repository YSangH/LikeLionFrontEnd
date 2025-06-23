// 이름을 명시한 경우(명명식)
import { add, y } from "./script1.js";
import sum, { add as plus } from "./script2.js";

console.log(add(1, 2), y);
console.log(plus(1, 2));
console.log(sum(6, 3));
