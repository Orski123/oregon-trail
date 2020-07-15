class Traveler  {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
       //  Increases the traveler's food by 2.
       return this.food = this.food + 2
       
    }   
    eat()  {
      // Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
  
      if (this.food > 0){
      this.isHealthy = true;
      this.food = this.food - 1;
    }
    else {
        this.isHealthy = false
    }
  
}
}
class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passangers= []
    }

    getAvailableSeatCount() {
    //Returns the number of empty seats, determined by the capacity set when
    // the wagon was created, subtracted by the number of passengers currently on board.
        return this.capacity - this.passangers.length
    }   

    join(Traveler)  {
       //Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them
       if (this.capacity > this.passangers.length){
           this.passangers.push(Traveler)
       }
       else {
           return ('no more room available')
       }
    }   

    shouldQuarantine() {
    //  Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    if (this.food - this.passangers.length > 0 ){
        return false;
    }
    else {
        return true;
    }
}

    totalFood() {
// Returns the total amount of food among all passengers in the wagon.

let sum =0
let totSum= this.passangers
for (let val of totSum){
    sum += val.food}
    return sum
    }
}



let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)