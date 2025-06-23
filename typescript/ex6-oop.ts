interface Car {
  drive();
  stop();
}

// Is A inheritance
class SUVcar implements Car {
  private speed: number;
  drive() {
    console.log("Driving an Car : " + this.speed + "km/h");
  } // 활성화시 오버라이드
  stop() {
    console.log("Stopping the SUVcar");
  }
}

class SportsCar {
  private speed: number;

  drive() {
    console.log("Driving an Car : " + this.speed + "km/h");
  }
  stop() {
    console.log("Stopping the SportsCar");
  }
}

class GamePanel {
  private car: Car; // Has A inheritance
  constructor(car: Car) {
    this.car = car;
  }
  // 실체화 된 객체

  start() {
    this.car.drive();
  }
  end() {
    this.car.stop();
  }
}

// let myCar: Car = new SUVcar(); --a
// let myCar: SUVcar = new Car(); --b
// let myCar: SUVcar = new SUVcar(); --c
// a와 b 일 경우 부모와 자식관계 이해
// b는 오류 발생
// a와 c 일 경우 범위 관계 비교

// 추상화 = 공통분모
