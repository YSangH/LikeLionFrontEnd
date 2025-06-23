class SUVcar {
  private speed: number;

  //   constructor(speed: number) {
  //     this.speed = speed;
  //   }

  drive() {
    console.log("Driving an Car : " + this.speed + "km/h");
  }
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
  private car: SUVcar; // Has A inheritance
  constructor() {
    this.car = new SUVcar();
  }
  // 실체화 된 객체

  start() {
    this.car.drive();
  }
  end() {
    this.car.stop();
  }
}
