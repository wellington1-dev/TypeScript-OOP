    class bike { 
    price: number;
    max_speed: String;
    mile: 0
    constructor(price: number,max_speed: String, mile: 0 ) {
        this.price = price;
        this.max_speed = max_speed;
        this.mile = 0;
    }
    displayInfo(): bike {
        console.log(" This is the Bike information" + this.price + this.max_speed + this.mile)
        return this
    }
    ride(): bike {
        this.mile += 100
        console.log("Riding in  " + this.mile+" mph")
        return this
    }
    reverse(): bike {
        this.mile-=5
        console.log("Reversing " + this.mile + " mph")
        return this
    }
}
let bike1 = new bike(10, "20 mph", 0)
bike1.ride()
bike1.reverse()