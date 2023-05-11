
function newemployee() {
    window.location.href = '/create';
  }

  function redirectfun() {
    window.location.href = '/edit';
  }
  
  const countElement = document.querySelector('.no_of_count');

(async function() {
  const response = await fetch('/login/count');
  const data = await response.json();
  if (countElement) {
    countElement.innerText = data.count;
  } else {
    console.error('Element with class "no_of_count" not found');
  }
})();

$(document).ready(function() {
  $('#toggleBtn').click(function() {
      $('#bar').toggleClass('d-none');
      $('#content-1').toggleClass("col-12");
  });
});


/* make a GET request to the server when the form is submitted
const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/login/aspx/findAll');
  const data = await response.json();
  displayData(data);
});

// display the data in a table
function displayData(data) {
    data.forEach((item) => {
    // Get the reference of the existing div element
    const existingDiv = document.getElementById("content");
    // Create a new div element
    const newDiv = document.createElement("div");
    newDiv.classList.add("shadow",'container')

    const row = document.createElement("div");
    row.classList.add('row')

    const col_12 = document.createElement("div");
    col_12.classList.add('col-9','my-2','h3')

    const button = document.createElement("button");
    button.classList.add('col-1','my-3','mx-3','btn','btn-danger')

    const button_edit = document.createElement("form");
    button_edit.classList.add('col-1','my-3','btn','btn-success')

    button.setAttribute('data-emp-id',item.id );
    button_edit.setAttribute('data-emp-id',item.id );
    const col_41 = document.createElement("div");
    col_41.classList.add('col-4','my-3')

    const col_42 = document.createElement("div");
    col_42.classList.add('col-4','my-3')

    const col_43 = document.createElement("div");
    col_43.classList.add('col-4','my-3',)

    const col_44 = document.createElement("div");
    col_44.classList.add('col-4','my-3')

    const col_45 = document.createElement("div");
    col_45.classList.add('col-4','my-3')

    const col_46 = document.createElement("div");
    col_46.classList.add('col-4','my-3')

    const col_47 = document.createElement("div");
    col_47.classList.add('col-4','my-3')

    const contact = document.createElement("p");
    contact.classList.add('container')
    // Set properties or attributes to the new div element
    newDiv.setAttribute("id", "newDiv");
    newDiv.setAttribute("class", "newDivClass");
    col_12.textContent ="Employee Id  : " + item.id;
    col_41.textContent ="Email   : " + item.email;
    col_42.textContent ="Full Name   : " +  item.fullName;
    col_43.textContent ="Age   : " +  item.age;
    col_44.textContent ="Date of Joining   : " +  item.dateOfJoining;
    col_45.textContent ="Address   : " +  item.address;
    col_46.textContent =" Department   : "+   item.department;
    col_47.textContent =" Contact   : " +  item.contactNumber;
    button.textContent ="Delete";
    button_edit.textContent ="Edit";
    button_edit.setAttribute("onclick", "redirectfun()");
    button_edit.setAttribute("action", "/edit");
    button_edit.setAttribute("method", "POST");

    // Append the new div element to the existing div element

    existingDiv.appendChild(newDiv);
    
    newDiv.appendChild(row);
    row.appendChild(col_12);
    row.appendChild(button);
    row.appendChild(button_edit);
    row.appendChild(col_41);
    row.appendChild(col_42)
    row.appendChild(col_43)
    row.appendChild(col_44)
    row.appendChild(col_45)
    row.appendChild(col_46)
    row.appendChild(col_47)

    button.addEventListener('click', () => {
    const empId = button.getAttribute('data-emp-id');
    fetch(`/login/aspx/delete/${empId}`, { method: 'DELETE' })
        .then(response => {
        if (response.ok) {
            // Show a success message to the user
            console.log('Employee deleted successfully.');
            // Redirect to the employees list page
            existingDiv.removeChild(newDiv);

            window.alert("User Deleted")
        } else {
            // Show an error message to the user
            console.error('Error deleting employee.');
      }
    })
    .catch(error => console.error(error));
});
    });
}

/*const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  data.forEach((item) => {
    const tr = document.createElement('div');
    tr.classList.add('my-custom-class');
    const td1 = document.createElement('td');
    td1.textContent = item.id;
    const td2 = document.createElement('td');
    td2.textContent = item.email;
    const td3 = document.createElement('td');
    td3.textContent = item.fullName;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);*/