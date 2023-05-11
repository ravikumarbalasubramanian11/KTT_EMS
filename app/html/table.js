// Example data
(async () => {
  const response = await fetch('/login/findAll');
  const data = await response.json();
  displayData(data);
})();

function displayData(data) {
  // Get a reference to the table body
  const tableBody = document.querySelector('#myTable tbody');

  // Loop through the data and create a row for each item
  data.forEach(item => {
    const row = tableBody.insertRow();

    const idCell = row.insertCell();
    idCell.textContent = item.id;

    const fullNameCell = row.insertCell();
    fullNameCell.textContent = item.fullName;

    const lastNameCell = row.insertCell();
    lastNameCell.textContent = item.lastName;

    const ageCell = row.insertCell();
    ageCell.textContent = item.age;

    const bloodGroupCell = row.insertCell();
    bloodGroupCell.textContent = item.bloodGroup;

    const contactNumberCell = row.insertCell();
    contactNumberCell.textContent = item.contactNumber;

    const dateOfJoiningCell = row.insertCell();
    dateOfJoiningCell.textContent = item.dateOfJoining;

    const addressCell = row.insertCell();
    addressCell.textContent = item.address;

    const departmentCell = row.insertCell();
    departmentCell.textContent = item.department;

    const pastExperianceCell = row.insertCell();
    pastExperianceCell.textContent = item.pastExperiance;

    const emailCell = row.insertCell();
    emailCell.textContent = item.email;

    const actionCell = row.insertCell();
    const button = document.createElement('button');
    button.setAttribute('data-emp-id',item.id );
    button.textContent = 'Delete';
    button.classList.add('btn','btn-danger')
    button.addEventListener('click', () => {
    const empId = button.getAttribute('data-emp-id');
    fetch(`/login/delete/${empId}`, { method: 'DELETE' })
        .then(response => {
        if (response.ok) {
            // Show a success message to the user
            console.log('Employee deleted successfully.');
            // Redirect to the employees list page
        
            window.alert("User Deleted")
        } else {
            // Show an error message to the user
            console.error('Error deleting employee.');
        }
    })
    .catch(error => console.error(error));
    // Delete the row from the table
        tableBody.removeChild(row);
    });
    actionCell.appendChild(button);
  });
}


