/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function square(squared){
    console.log(this * this);
    return squared;
}
square(5);
// Principle 2

// code example for Implicit Binding
let newCar = {
    make: "Honda",
    greet: function(guest){
        console.log(`Hello, ${name} this is a ${make}.`);
    }
}
newCar.greet("Carlil");
// Principle 3

// code example for New Binding
function Distance(longitude, latitude){
    this.longitude = longitude;
    this.latitude = latitude;
    this.calculateDistance = function distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist;
        }
    }
}
// Principle 4

// code example for Explicit Binding
