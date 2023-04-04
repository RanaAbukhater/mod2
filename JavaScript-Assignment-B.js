/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: function(){ alert("Beep") }
        }
    }
}



/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.
console.log(house);
house.areas.livingRoom.items.push('dining table');
//house['areas']['livingRoom']['items']= ['tv','sofa', 'dining table'];
console.log(house['areas']['livingRoom']['items']);
// (2) Add a stove to the kitchen.
house.areas.kitchen.items.push('stove');
console.log(house['areas']['kitchen']['items']);
// (3) Remove the washing machine from bedroomOne.
house.areas.bedroomOne.items.pop();
console.log(house['areas']['bedroomOne']['items']);
// (4) Change the color of the car to blue.
house.garage.car.color= ('blue');
console.log(house['garage']['car']['color']);
// (5) Add a another car to the garage with a honk function.


var NewCar = {

    'honk': honk = function(params) {
        alert("Beep");
    }
}
house.garage['Car01'] = NewCar
console.log(house.garage);

// (6) Make the new car honk.
house.garage.Car01.honk();
// (7) If the house has a garden, console.log the name of the flower.
var i = house.garden;
    console.log(house.garden[1]);

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function


    house['areas']['kitchen']['items'][1]= house['areas']['kitchen']['items'][1].replace('broken chair', 'new chair');
  console.log(house['areas']['kitchen']['items']);
  

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.

console.log(Object.keys(house.areas).length);
// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.

var BED = Object.values(house.areas)
var totalNumberofBeds = 0
for(var x=0; x<BED.length; x++){
for (var y=0; y<BED[x].items.length; y++){
    if (BED[x].items[y] == 'bed') {

        totalNumberofBeds++;
    }

    
}

}

console.log(totalNumberofBeds);