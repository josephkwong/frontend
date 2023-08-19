// Object Methods

var hotel = {};  // empty object

hotel.name = "The Four Season";
hotel.price = 200;
hotel.stars = 6;
hotel.isFull = false;

hotel.summariseHotel = function() {
    console.log('The Four Season is a beautful ' +  hotel.stars + ' star hotel');
}

hotel.summariseHotel();


// Method case 2 - hotelClosed
hotel.hotelClosed = function(closed) {
    if (closed == true) {
        console.log("I'm sorry, the hotel is currently closed.");
    } else {
        console.log('The hotel is currently opening.');
    }
}

hotel.hotelClosed(true);
