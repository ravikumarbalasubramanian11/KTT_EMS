(async () => {
  const response = await fetch('/login/findAll');
  const data = await response.json();
  displayData(data);
})();

function displayData(data) {
  const tableBody = document.querySelector('#myTable tbody');

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
            console.log('Employee deleted successfully.');
        
            window.alert("User Deleted")
        } else {
            console.error('Error deleting employee.');
        }
    })
    .catch(error => console.error(error));
    
        tableBody.removeChild(row);
    });
    actionCell.appendChild(button);
  });
}


