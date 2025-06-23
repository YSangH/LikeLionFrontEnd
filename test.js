// prototype 예시

// let exam1 = new Object();
// exam1.kor = 100;
// exam1.eng = 90;
// exam1.math = 80;

// console.log(exam1);

// function newExam(kor, eng, math) {
//   exam.math = math;
//   return exam;
// }

// function Exam(kor, eng, math) {
//   console.log(this);
//   this.kor = kor;
//   this.eng = eng;
//   this.math = math;
// }

// let exam3 = new Exam(90, 80, 70);
// console.log(exam3);

// let add = new Function("a", "b", "return a + b");
// console.log(add(10, 20));

// ------------------- 아래와 동일

// let add = function (x, y) {
//   return x + y;
// };

// ---------------------------------------

// {
//   let add = function (a, b, ...rest) {
//     // --- rest Arguments 적용
//     // let a = arguments[0];
//     // let b = arguments[1];

//     let restSum = rest.reduce((acc, value) => acc + value, 0);
//     let sum = a + b + rest;

//     return a + b;
//   };

//   console.log(add(10, 20, 30, 40, 50));
//   let nums = [2, 3];
//   let sum = add(...nums, 4, 5, 6); // spread 연산
// }

{
  function Exam(kor, eng, math) {
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    // this.toString = function () {
    //   return `국어: ${this.kor},국어: ${this.eng},수학: ${this.math} `;
    // };
  }

  Exam.prototype.toString = function () {
    return `국어: ${this.kor},국어: ${this.eng},수학: ${this.math} `;
  };

  let exam1 = new Exam(90, 80, 70);
  let exam2 = new Exam(90, 80, 70);
  let exam3 = new Exam(90, 80, 70);

  console.log(exam1.toString === exam2.toString);
  console.log(exam1.toString === exam3.toString);

  Array.prototype.non = function () {
    console.log("non");
  };

  let arr = new Array(1, 2, 3);
  console.log(arr.non());
}
