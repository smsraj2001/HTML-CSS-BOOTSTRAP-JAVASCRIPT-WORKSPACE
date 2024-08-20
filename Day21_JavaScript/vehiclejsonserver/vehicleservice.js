const apiUrl = 'http://localhost:3000/vehicles';

// Function to fetch and display vehicles in the table
function loadVehicles() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('vehicleTableBody');
            tableBody.innerHTML = '';

            data.forEach(vehicle => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${vehicle.id}</td>
                    <td>${vehicle.name}</td>
                    <td>${vehicle.cc}</td>
                    <td>${vehicle.price}</td>
                    <td>${vehicle.mileage}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching vehicles:', error));
}

// Function to create a new vehicle
function createVehicle() {
    const newVehicle = {
        name: document.getElementById('createName').value,
        cc: parseInt(document.getElementById('createCC').value),
        price: parseInt(document.getElementById('createPrice').value),
        mileage: parseInt(document.getElementById('createMileage').value)
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVehicle)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Vehicle Created:', data);
        loadVehicles(); // Refresh the vehicle list
        document.getElementById('createForm').reset();
        document.getElementById('createForm').style.display = 'none';
    })
    .catch(error => console.error('Error creating vehicle:', error));
}

// Function to update a vehicle by ID
function updateVehicle() {
    const vehicleId = document.getElementById('updateId').value;
    const updatedVehicle = {
        name: document.getElementById('updateName').value,
        cc: parseInt(document.getElementById('updateCC').value),
        price: parseInt(document.getElementById('updatePrice').value),
        mileage: parseInt(document.getElementById('updateMileage').value)
    };

    fetch(`${apiUrl}/${vehicleId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedVehicle)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Vehicle Updated:', data);
        loadVehicles(); // Refresh the vehicle list
        document.getElementById('updateForm').reset();
        document.getElementById('updateForm').style.display = 'none';
    })
    .catch(error => console.error('Error updating vehicle:', error));
}

// Function to delete a vehicle by ID
function deleteVehicle() {
    const vehicleId = document.getElementById('deleteId').value;

    fetch(`${apiUrl}/${vehicleId}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Vehicle Deleted');
        loadVehicles(); // Refresh the vehicle list
        document.getElementById('deleteForm').reset();
        document.getElementById('deleteForm').style.display = 'none';
    })
    .catch(error => console.error('Error deleting vehicle:', error));
}

// Event listeners for buttons
document.getElementById('showVehicles').addEventListener('click', loadVehicles);
document.getElementById('createVehicle').addEventListener('click', () => {
    document.getElementById('createForm').style.display = 'block';
    document.getElementById('updateForm').style.display = 'none';
    document.getElementById('deleteForm').style.display = 'none';
});
document.getElementById('updateVehicle').addEventListener('click', () => {
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('updateForm').style.display = 'block';
    document.getElementById('deleteForm').style.display = 'none';
});
document.getElementById('deleteVehicle').addEventListener('click', () => {
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('updateForm').style.display = 'none';
    document.getElementById('deleteForm').style.display = 'block';
});
document.getElementById('addVehicle').addEventListener('click', createVehicle);
document.getElementById('updateVehicleBtn').addEventListener('click', updateVehicle);
document.getElementById('deleteVehicleBtn').addEventListener('click', deleteVehicle);
