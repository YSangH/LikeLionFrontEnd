// Is A inheritance
var SUVcar = /** @class */ (function () {
    function SUVcar() {
    }
    SUVcar.prototype.drive = function () {
        console.log("Driving an Car : " + this.speed + "km/h");
    }; // 활성화시 오버라이드
    SUVcar.prototype.stop = function () {
        console.log("Stopping the SUVcar");
    };
    return SUVcar;
}());
var SportsCar = /** @class */ (function () {
    function SportsCar() {
    }
    SportsCar.prototype.drive = function () {
        console.log("Driving an Car : " + this.speed + "km/h");
    };
    SportsCar.prototype.stop = function () {
        console.log("Stopping the SportsCar");
    };
    return SportsCar;
}());
var GamePanel = /** @class */ (function () {
    function GamePanel(car) {
        this.car = car;
    }
    // 실체화 된 객체
    GamePanel.prototype.start = function () {
        this.car.drive();
    };
    GamePanel.prototype.end = function () {
        this.car.stop();
    };
    return GamePanel;
}());
// let myCar: Car = new SUVcar(); --a
// let myCar: SUVcar = new Car(); --b
// let myCar: SUVcar = new SUVcar(); --c
// a와 b 일 경우 부모와 자식관계 이해
// b는 오류 발생
// a와 c 일 경우 범위 관계 비교
// 추상화 = 공통분모
