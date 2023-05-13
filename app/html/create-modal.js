const phoneNumberInput = document.getElementById("contactNumber-1");
const modalInputs = document.querySelectorAll('#abc123 input');
const close = document.getElementById("close");

const department = document.getElementById("department-1");
const bloodGroup = document.getElementById("bloodGroup-1");
const address = document.getElementById("address-1");


$(document).ready(function() {
  const inputField = $('#contactNumber-1');
  
  inputField.on("input", function() {
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
      console.log(this.value)
    }
  });
});

$(document).ready(function() {
  const inputField = $('#age-1');
  
  inputField.on("input", function() {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
      console.log(this.value)
    }
  });
});

$(document).ready(function() {
  const inputField = $('#pastExperiance-1');
  
  inputField.on("input", function() {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
      console.log(this.value)
    }
  });
});

close.addEventListener("click", function() {
  department.value=" "
})

close.addEventListener("click", function() {
  bloodGroup.value=" "
})

close.addEventListener("click", function() {
  selectField.selectedIndex = 0;
});

close.addEventListener("click", function() {
  address.value=""
});


close.addEventListener("click", function() {
  modalInputs.forEach(input => {
    input.value = '';})
})

phoneNumberInput.addEventListener("blur", function() {
  const phoneNumberRegex = /^\d{10}$/;
  const phoneNumber = phoneNumberInput.value.toString();

  if (!phoneNumberRegex.test(phoneNumber)) {
    alert("Please enter a valid 10-digit phone number.");
  }
});



const form = document.querySelector('#form-id');

$('#id-submit').on('click', function (event) {
  event.preventDefault();

  var email = $('#email-1').val();
  var userName = $('#userName-1').val()
  var password = $('#password-1').val()
  var fullName = $('#fullName-1').val()
  var lastName = $('#lastName-1').val()
  var department= $('#department-1').val();
  var bloodGroup = $('#bloodGroup-1').val()
  var contactNumber = $('#contactNumber-1').val()
  var age = $('#age-1').val()
  var address = $('#address-1').val()
  var pastExperiance =$('#pastExperiance-1').val()
  var dateOfJoining =$('#dateOfJoining-1').val()


  if (email === '') {
    alert('Please enter email');
  }
  else if (userName === '') {
    alert('Please enter user name');
  } 
  else if (password === '') {
    alert('Please enter password');
  }
  else if (fullName === '') {
    alert('Please enter first name');
  }
  else if (bloodGroup === '') {
    alert('Please enter blood group details');
  } 
  else if (age === '') {
    alert('Please enter age');
  }
  else if (contactNumber === '') {
    alert('Please enter contact number');
  } 
  else {
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
      success: function(response) {
        alert('Employee Created Successfully');
        if(response){
          console.log("works")
          $('#exampleModal1').modal('hide');
          modalInputs.forEach(input => {
            input.value = '';})
            setTimeout(async function() {
              const response = await fetch('/login/count');
              const data = await response.json();
              if (countElement) {
                countElement.innerText = data.count;
              } else {
                console.error('Element with class "no_of_count" not found');
              }
            }, 1000); 
            
          table.ajax.reload()
        };
      },
      error: function(error){
        alert("Fill all mandatory Details")
      }
    });
  }
});






/*if(form){form.addEventListener('submit', function(event) {
  event.preventDefault();
  });}
*/


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

*/