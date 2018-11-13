var bike = /** @class */ (function () {
    function bike(price, max_speed, mile) {
        this.price = price;
        this.max_speed = max_speed;
        this.mile = 0;
    }
    bike.prototype.displayInfo = function () {
        console.log(" This is the Bike information" + this.price + this.max_speed + this.mile);
        return this;
    };
    bike.prototype.ride = function () {
        this.mile += 100;
        console.log("Riding in  " + this.mile + " mph");
        return this;
    };
    bike.prototype.reverse = function () {
        this.mile -= 5;
        console.log("Reversing " + this.mile + " mph");
        return this;
    };
    return bike;
}());
var bike1 = new bike(10, "20 mph", 0);
bike1.ride();
bike1.reverse();