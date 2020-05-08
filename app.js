function calculateExcess() {

  var totalDistance = prompt('Enter the total distance value in kilometers.');

  var averageConsumption = prompt('Enter the average fuel consumption value over 100 kilometers.');

  var tankCapacity = prompt('Enter the fueltank capacity value of the space shuttle.');
  
  var requiredFuel = totalDistance * (averageConsumption / 100);
  
  var excessFuel = tankCapacity - requiredFuel;
  
  alert('The required amount of fuel is: ' + requiredFuel + ' liters. \n The amount of fuel to be drained is: ' + excessFuel + ' liters.');

}

calculateExcess();