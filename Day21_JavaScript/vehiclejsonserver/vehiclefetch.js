const apiUrl = 'http://localhost:3000/vehicles';

// Function to create a new vehicle
function createVehicle(vehicle) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehicle)
  })
  .then(response => response.json())
  .then(data => console.log('Vehicle Created:', data))
  .catch(error => console.error('Error creating vehicle:', error));
}

// Function to get all vehicles
function getVehicles() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log('All Vehicles:', data))
    .catch(error => console.error('Error fetching vehicles:', error));
}

// Function to get a single vehicle by ID
function getVehicleById(id) {
  fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(data => console.log('Vehicle Details:', data))
    .catch(error => console.error('Error fetching vehicle:', error));
}

// Function to update a vehicle by ID
function updateVehicle(id, updatedData) {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
  .then(response => response.json())
  .then(data => console.log('Vehicle Updated:', data))
  .catch(error => console.error('Error updating vehicle:', error));
}

// Function to delete a vehicle by ID
function deleteVehicle(id) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE'
  })
  .then(() => console.log('Vehicle Deleted'))
  .catch(error => console.error('Error deleting vehicle:', error));
}

// Example usage:

// Create a new vehicle
createVehicle({
  name: 'TVS Raider',
  cc: 125,
  price: 85000,
  mileage: 60
});

// Get all vehicles
getVehicles();

// Get a vehicle by ID
getVehicleById(3);

// Update a vehicle by ID
updateVehicle(2, {
  name: 'TVS Apache RTR 180',
  cc: 180,
  price: 112000,
  mileage: 42
});

// Delete a vehicle by ID
deleteVehicle(4);
