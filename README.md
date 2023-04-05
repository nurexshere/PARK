Parking website

This is a simple HTML and JavaScript web page that allows users to register their cars for parking and display a list of parked cars.

The HTML code includes a form where users can input their car model, plate number, and car color. When the user clicks the "PARK" button, the JavaScript code is triggered, which creates a new car object and adds it to a list of parked cars. Each car object consists of the car model, plate number, and car color.

When the user submits the form by clicking the "PARK" button, the JavaScript function registerCar() is executed. This function retrieves the values entered by the user in the form and creates a new car object with these values. The car object is then displayed in the list of parked cars, which is a <ul> element with each car information displayed as a <div> element inside.

The function registerCar() performs the following steps:

Gets the values entered in the form by the user using the document.getElementById() method.
Creates a new car object using the retrieved values and appends it to the list of parked cars.
Displays a message to the user indicating that their car has been registered.
The function removeCar(button) is called when the user clicks the "Remove" button next to a parked car. This function removes the corresponding car object from the list of parked cars.

The CSS code is used to style the web page with different colors, fonts, and layout. It specifies the background image for the page, the font family used, and the colors and styles for various elements such as the header, form, and parked car list.

Overall, this web page uses basic HTML and JavaScript techniques to create a simple car parking registration system that allows users to register their cars and view the list of parked cars.




