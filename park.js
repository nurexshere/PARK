function registerCar() {
  const carName = document.getElementById('car').value;
  const plateNumber = document.getElementById('plate-number').value;
  const carColor = document.getElementById('color').value;
  
   alert(carName + "--" + plateNumber +"--" + carColor + " WILL BE PARKED ");

  
  const parkedCars = document.getElementById('parked-cars').querySelector('ul');
  const newCar = document.createElement('div');
  newCar.classList.add('car-info');
  const carInfo = document.createTextNode('==>'+ carName + '-----------' + plateNumber + '---------' + carColor + '  ');
  newCar.appendChild(carInfo);
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  
  removeButton.onclick = function() {
    alert("ARE YOU SURE " + carName + " " + plateNumber +" " + carColor + " WILL BE REMOVED!! ");
      removeCar(this);
  };
  newCar.appendChild(removeButton);
  parkedCars.appendChild(newCar);
  
  document.getElementById('car').value = '';
  document.getElementById('plate-number').value = '';
  document.getElementById('color').value = '';
}

function removeCar(button) {
  
  const carInfo = button.parentNode;
  const parkedCars = document.getElementById('parked-cars').querySelector('ul');
  parkedCars.removeChild(carInfo);
  
}