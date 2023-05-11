// select the form element instead of the submit button
const form = document.querySelector('#form-id');

if(form){form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email-1');
  const email = emailInput.value;

  const userNameInput = document.querySelector('#userName-1');
  const userName = userNameInput.value;
  
  const passwordInput = document.querySelector('#password-1');
  const password = passwordInput.value;

  const fullNameInput = document.querySelector('#fullName-1');
  const fullName = fullNameInput.value;

  const lastNameInput = document.querySelector('#lastName-1');
  const lastName = lastNameInput.value;

  const bloodGroupInput = document.querySelector('#bloodGroup-1');
  const bloodGroup = bloodGroupInput.value;

  const contactNumberInput = document.querySelector('#contactNumber-1');
  const contactNumber = contactNumberInput.value;
  
  const dateOfJoiningInput = document.querySelector('#dateOfJoining-1');
  const dateOfJoining = dateOfJoiningInput.value;

  const ageInput = document.querySelector('#age-1');
  const age = ageInput.value;

  const addressInput = document.querySelector('#address-1');
  const address = addressInput.value;

  const departmentInput = document.querySelector('#department-1');
  const department = departmentInput.value;

  const pastExperianceInput = document.querySelector('#pastExperiance-1');
  const pastExperiance = pastExperianceInput.value;

  console.log(pastExperiance)
  $.ajax({
    url: '/login/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ 
      userName: userName,
      password: password,
      fullName: fullName,
      email: email,
      bloodGroup: bloodGroup,
      age: age,
      lastName: lastName,
      contactNumber: contactNumber,
      dateOfJoining: dateOfJoining,
      address: address,
      department: department,
      pastExperiance: pastExperiance
    }),
    success: function(data) {
      if (data.errorMessage) {
        alert(data.errorMessage);
      } else {
        alert('Success');
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Error 500');
      console.log(errorThrown);
      debugger;
    }
  });
});}







/*const submitBtn = document.getElementById('#id-submit');

submitBtn.addEventListener('submit', function() {
  axios.post('/login', {
    fullName: 'John Doe',
    lastName: 'Doe',
    age: 30,
    bloodGroup: 'O+',
    contactNumber: '1234567890',
    dateOfJoining: '2022-01-01',
    address: '123 Main St, Anytown USA',
    department: 'IT',
    pastExperiance: '3 years',
    userName: 'johndoe',
    password: 'password123',
    email: 'johndoe@example.com'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
});


document.querySelector('#id-submit').addEventListener('click', function(event) {
    event.preventDefault();

  const emailInput = document.querySelector('#email-1');
  const email = emailInput.value;

  const userNameInput = document.querySelector('#userName-1');
  const userName = userNameInput.value;
  
  const passwordInput = document.querySelector('#password-1');
  const password = passwordInput.value;

  const fullNameInput = document.querySelector('#fullName-1');
  const fullName = fullNameInput.value;

  const lastNameInput = document.querySelector('#lastName-1');
  const lastName = lastNameInput.value;

  const bloodGroupInput = document.querySelector('#bloodGroup-1');
  const bloodGroup = bloodGroupInput.value;

  const contactNumberInput = document.querySelector('#contactNumber-1');
  const contactNumber = contactNumberInput.value;
  
  const dateOfJoiningInput = document.querySelector('#dateOfJoining-1');
  const dateOfJoining = dateOfJoiningInput.value;

  const ageInput = document.querySelector('#age-1');
  const age = ageInput.value;

  const addressInput = document.querySelector('#address-1');
  const address = addressInput.value;

  const departmentInput = document.querySelector('#department-1');
  const department = departmentInput.value;

  const pastExperianceInput = document.querySelector('#pastExperiance-1');
  const pastExperiance = pastExperianceInput.value;

  $.ajax({
    url: '/login',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ 
      userName: userName,
      password: password,
      fullName: fullName,
      email: email,
      bloodGroup: bloodGroup,
      age: age,
      lastName: lastName,
      contactNumber: contactNumber,
      dateOfJoining: dateOfJoining,
      address: address,
      department: department,
      pastExperiance: pastExperiance
    }),
    success: function(data) {
      if (data.errorMessage) {
        alert(data.errorMessage);
      } else {
        alert('Error 404');
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Error 500');
      console.log(errorThrown);
      debugger;
    }
  });
  
});




/*
function checkInputRequired(inputElement, inputName) {
  if (!inputElement.value) {
    alert(`${inputName} is required`);
  }
}

document.querySelector('#email-1').addEventListener('blur', function() {
  checkInputRequired(this, 'Email address');
});

document.querySelector('#userName-1').addEventListener('blur', function() {
  checkInputRequired(this, 'User Name');
});

document.querySelector('#password-1').addEventListener('blur', function() {
  checkInputRequired(this, 'Password');
});

document.querySelector('#fullName-1').addEventListener('blur', function() {
  checkInputRequired(this, 'Full Name');
});

document.querySelector('#lastName-1').addEventListener('blur', function() {
  checkInputRequired(this, 'Last Name');
});

document.querySelector('#age-1').addEventListener('blur', function() {
  checkInputRequired(this, 'Age');
});

document.querySelector('#bloodGroup-1').addEventListener('blur', function() {
  checkInputRequired(this, 'Blood Group');
});

document.querySelector('#contactNumber-1').addEventListener('blur', function() {
  checkInputRequired(this, 'Contact Number');
});

document.querySelector('#dateOfJoining-1').addEventListener('blur', function() {
  checkInputRequired(this, 'Date Of Joining');
});
*/