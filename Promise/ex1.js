// async/await를 주로 사용하고 불가피하게 사용 못할 시 이유를 서술 할 것
// ----------------- Promise를 사용한 비동기 처리 예제
{
  const fs = require("fs/promises");
  const path = "./";

  (async () => {
    const fileList = await fs.readdir(path);
  })();

  //   const promise = fs.readdir(path);
  //   promise.then(function (err, fileList) {
  //     console.log(fileList);
  //   });
  console.log("File read complate");
}
// ----------------- 비동기식으로 파일을 읽는 예제
{
  //   const fs = require("fs/promises");
  //   const path = "./";
  //   fs.readdir(path, function (err, fileList) {
  //     console.log(fileList);
  //   });
  //   console.log("File read complate");
}

// ----------------- 동기식으로 파일을 읽는 예제

// {
//   const fs = require("fs/promises");
//   const path = "./"; // 전체 디렉터리

//   const fileList = fs.readdirSync(path); // 동기식
//   console.log(fileList);

//   console.log("File read complate");
// }

// 메인스레드에 동기식으로 사용할시 응답없음 같은 경우가 발생한다.
