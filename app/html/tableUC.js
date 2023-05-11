let loggedInAsAdmin = true;

function requireAdmin(req, res, next) {
  loggedInAsAdmin = req.session.userName === "admin";
  next();
}

(async () => {
  await fetch('/login/findAll')
    .then(response => response.json())
    .then(data => {
      let table = new DataTable('#myTable', {
        data: data,
        dom: "<'row'<'col-sm-6'B><'col-sm-6'f>>" +
          "<'row'<'col-sm-12'tr>>" +
          "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        lengthMenu: [
          [10, 20, 25, 50, 100],
          [10, 20, 25, 50, 100]
        ],
        lengthChange: true,
        buttons: [{
          extend: 'excel',
          className: 'btn-primary',
          exportOptions: {
            columns: ':not(:last-child)' // exclude last column (Action)
          }
        }],
        columns: [{
            data: 'id'
          },
          {
            data: 'fullName'
          },
          {
            data: 'lastName'
          },
          {
            data: 'age'
          },
          {
            data: 'bloodGroup'
          },
          {
            data: 'contactNumber'
          },
          {
            data: 'dateOfJoining'
          },
          {
            data: 'address'
          },
          {
            data: 'department'
          },
          {
            data: 'pastExperiance'
          },
          {
            data: 'email'
          },
          {
            data: null,
            render: function (data, type, row) {
              if (loggedInAsAdmin) {
                return '<button id="update-btn" data-emp-id="' + data.id 
                + '" class="btn btn-secondary my-2">Edit</button>' 
                + '<button id="delete-btn" data-emp-id="' + data.id + '" class="btn btn-secondary">Delete</button>';
              } else {
                return 'none';
              }
            }
          }
          
        ]
      });

      if (!loggedInAsAdmin) {
        table.column(-1).visible(false);
      } else {
        table.column(-1).visible(true);
      }

      // Add event listener for delete button
      $('#myTable tbody').on('click', '#delete-btn', function () {
        const empId = $(this).data('emp-id');
        fetch(`/login/delete/${empId}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (response.ok) {
            // Show a success message to the user
            window.alert('Employee deleted successfully.');
            // Reload the table
            $.ajax({
              url: "/login/getAll",
              type: "GET",
              dataType: "json",
              success: function (data) {
                 window.location.reload();
                 table.ajax.reload(true, true);
                // Clear the current table rows
                $('#myTable').DataTable().clear();
                // Add the new data
                $('#myTable').DataTable().rows.add(data);
                // Redraw the table
                $('#myTable').DataTable().draw();
              },
              error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
              }
            });
          } else {
            // Show an error message to the user
            window.alert('Error deleting employee.');
          }
        })
        .catch(error => console.log("error = " + error));
      });
      
      
      

       $('#myTable tbody').on('click', '#update-btn', function () {
        const id = $(this).data('emp-id');
        console.log(id)
        fetch(`/login/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             fullName : fullName , email : email , bloodGroup : bloodGroup ,
             age: age , lastName : lastName , contactNumber : contactNumber ,
             dateOfJoining : dateOfJoining , address : address , department : department ,
             pastExperiance : pastExperiance})
        })
          .then(response => {
            if (response.ok) {
              // Show a success message to the user
              window.alert('Employee Updated successfully.');
              // Reload the table
              table.ajax.reload(true, true);
            } else {
              // Show an error message to the user
              window.alert('Error Updated employee.');
            }
          })
          .catch(error => console.log("error = " + error));
      });
    });
})();

  const idInput = document.querySelector('#id');
  const emailInput = document.querySelector('#email');
  const fullNameInput = document.querySelector('#fullName');
  const lastNameInput = document.querySelector('#lastName');
  const bloodGroupInput = document.querySelector('#bloodGroup');
  const ageInput = document.querySelector('#age-input');
  const contactNumberInput = document.querySelector('#contactNumber');
  const dateOfJoiningInput = document.querySelector('#dateOfJoining');
  const addressInput = document.querySelector('#address');
  const pastExperianceInput = document.querySelector('#pastExperiance');
  const departmentInput = document.querySelector('#department');


$('#myTable tbody').on('click', '#update-btn', function () {
  // Get the employee ID from the button data attribute
  const id = $(this).data('emp-id');
  console.log(id);

  // Show the modal
  $('#exampleModal').modal('show');
  fetch(`/login/find/${id}`)
  .then(response => response.json())
  .then(data => {
 if (data.successMessage) {
      const id = data.employee.id;
      const email = data.employee.email;
      const fullName = data.employee.fullName;
      const lastName = data.employee.lastName;
      const age = data.employee.age;
      const bloodGroup = data.employee.bloodGroup;
      const contactNumber = data.employee.contactNumber;
      const dateOfJoining = data.employee.dateOfJoining;
      const address= data.employee.address;
      const pastExperiance = data.employee.pastExperiance;
      const department = data.employee.department;


      idInput.value= id;
      emailInput.value = email;
      fullNameInput.value =fullName;
      lastNameInput.value =lastName;
      bloodGroupInput.value =bloodGroup;
      ageInput.value =age;
      contactNumberInput.value= contactNumber;
      dateOfJoiningInput.value=dateOfJoining;
      addressInput.value=address;
      pastExperianceInput.value=pastExperiance;
      departmentInput.value=department;


      console.log(data); // This line is optional, but you could log the employee object to the console for debugging purposes
    }
  })
  .catch(error => {
    alert("Error: " + error.message);
    console.log(error);
  });
  
  
  const update = document.querySelector('#update');

  update.addEventListener('click',event =>{
    event.preventDefault;

    const emailInput = document.querySelector('#email');
    const fullNameInput = document.querySelector('#fullName');
    const lastNameInput = document.querySelector('#lastName');
    const bloodGroupInput = document.querySelector('#bloodGroup');
    const ageInput = document.querySelector('#age-input');
    const contactNumberInput = document.querySelector('#contactNumber');
    const dateOfJoiningInput = document.querySelector('#dateOfJoining');
    const addressInput = document.querySelector('#address');
    const pastExperianceInput = document.querySelector('#pastExperiance');
    const departmentInput = document.querySelector('#department');

    const email = emailInput.value;
    const fullName = fullNameInput.value;
    const lastName = lastNameInput.value;
    const bloodGroup = bloodGroupInput.value;
    const contactNumber = contactNumberInput.value;
    const dateOfJoining = dateOfJoiningInput.value;
    const age = ageInput.value;
    const address = addressInput.value;
    const pastExperiance = pastExperianceInput.value;
    const department = departmentInput.value;
    
    if(emailInput.value == "" ||
        fullNameInput.value == "" ||
        lastNameInput.value == "" ||
        bloodGroupInput.value == "" ||
        ageInput.value == "" ||
        contactNumberInput.value == "" ||
        dateOfJoiningInput.value == "" ||
        addressInput.value == "" ||
        pastExperianceInput.value == "" ||
        departmentInput.value == "" ){
          alert("Required all input Fields")
        }
    else{

      const idInput = document.querySelector('#id');
      const id = idInput.value;
      console.log("Safe "+id)

      fetch(`/login/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName : fullName , email : email , bloodGroup : bloodGroup ,
          age: age , lastName : lastName , contactNumber : contactNumber ,
          dateOfJoining : dateOfJoining , address : address , department : department ,
          pastExperiance : pastExperiance})
      })
        .then(response => response.json())
        .then(data => {
          if (data.errorMessage) {
            alert("Error: " + data.errorMessage);
            // Employee was updated successfully
            console.log('Employee was updated successfully.');
            modal.style.display = 'none';
          } else {
            // Error updating employee
            console.error('Error updating employee.');
            alert(data.successMessage);
            modal.style.display = 'none';
          }
        
        })
        .catch(error => console.error(error));
    };
  })
});




