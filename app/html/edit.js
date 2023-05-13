
const button = document.querySelector('#update-button');
const update = document.querySelector('#update');
button.addEventListener('click', event => {
  event.preventDefault();

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

  const idInput = document.querySelector('#id');
  const id = idInput.value;
  console.log(id)
  fetch(`/login/find/${id}`)
  .then(response => response.json())
  .then(data => {
    if (data.errorMessage) {
      alert("Error: " + data.errorMessage);

      emailInput.value = "";
      fullNameInput.value = "" ;
      lastNameInput.value = "" ;
      bloodGroupInput.value = "" ;
      ageInput.value = "" ;
      contactNumberInput.value= "" ;
      dateOfJoiningInput.value= "" ;
      addressInput.value= "" ;
      pastExperianceInput.value= "" ;
      departmentInput.value= "" ;


    } else if (data.successMessage) {
      alert("Success: " + data.successMessage);
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


      console.log(data);
    }
  })
  .catch(error => {
    alert("Error: " + error.message);
    console.log(error);
  });
});

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

          console.log('Employee was updated successfully.');
          modal.style.display = 'none';
        } else {
          console.error('Error updating employee.');
          alert(data.successMessage);
          modal.style.display = 'none';
        }
       
      })
      .catch(error => console.error(error));
  };
  

  })

/*form.addEventListener('submit', event => {
  event.preventDefault();

  const fullName = fullNameInput.value;
  const lastName = lastNameInput.value;
  const bloodGroup = bloodGroupInput.value;
  const contactNumber = contactNumberInput.value;
  const dateOfJoining = dateOfJoiningInput.value;
  const age = ageInput.value;
  const address = addressInput.value;
  const department = departmentInput.value;
  const pastExperiance = pastExperianceInput.value;

  fetch(`/login/aspx/${id}`, {
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
        // Employee was updated successfully
        console.log('Employee was updated successfully.');
        alert('Employee was updated successfully.');
      } else {
        // Error updating employee
        console.error('Error updating employee.');
        alert('* Required Fields');
      }
    })
    .catch(error => console.error(error));
});

*/


/* 
const form = document.querySelector('button');

const id = 36;
const lastName = 'Smith';
const fullName = 'John Smith';
const age = '990';
const pastExperiance = '3 years';
const bloodGroup = 'O+';
const contactNumber = '1234567890';

form.addEventListener('click', () => {
  fetch(`/login/aspx/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ lastName, fullName, age, pastExperiance, bloodGroup, contactNumber })
  })
    .then(response => {
      if (response.ok) {
        // Employee was updated successfully
        console.log('Employee was updated successfully.');
      } else {
        // Error updating employee
        console.error('Error updating employee.');
      }
    })
    .catch(error => console.error(error));
});


*/