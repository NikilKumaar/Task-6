// write a class to calculate uber price.

class Uber{
    constructor(distance = 10, wait = 5)  // By default the minimum distance and wait time for Uber 10km & 5 minute
    {
        this.distance = distance;
        this.wait = wait;
    }
    getdistance()
    {
        this.distance = distance;
    }
    setdistance(value)
    {
        this.distance = value;
    }
    getwait()
    {
        this.wait = wait;
    }
    setwait(value)
    {
        this.wait = value;
    }
    calculatePrice(dis)
    {
        let basePrice = 50  // lets assume for 1km - Rs. 6 /- and minimum base as Rs. 50 /-
        let price = 0;
        this.distance = dis;
        let travelledPrice = dis * 6;
        if (travelledPrice > basePrice)
        {
            price = travelledPrice;
        }
        else
        {
            price = basePrice;
        }
        console.log('Travelled distance price : ',price)
        return price
    }
    calculatewait(w)
    {
        let price = 0
        this.wait = w;
        let result = 0
        if (w > 15 && w < 30)  // Assuming wait for 30 minute is Rs. 100 /-
        {
            result = 50
        }
        if (w < 15)
        {
            result = 0
        }
        if (w > 30)
        {
            result = w / 30;
            price = result * 100
            console.log('Wait time charges : ',price)
            return price
            }
        
    }
}
let customer = new Uber()
let p1 = customer.calculatePrice(100)
let w1 = customer.calculatewait(45)
console.log('Total Price is => ' + (p1 + w1))
let festivalDays = 1.5 * p1
console.log('Due to festival time, the price is 1.5 X of initial price')
console.log('Total Price is =>', p1+w1+festivalDays)