let addUserForm = document.querySelector("#addUser");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let mobileNo = document.querySelector("#mobileNo");
let tbody = document.querySelector("#viewData");

let users = JSON.parse(localStorage.getItem("Users")) || [];
let editIndex = null;

// Add or Update user
addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newUser = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    password: password.value,
    mobileNo: mobileNo.value,
  };

  if (editIndex !== null) {
    users[editIndex] = newUser;
    editIndex = null;
  } else {
    users.push(newUser);
  }

  localStorage.setItem("Users", JSON.stringify(users));
  addUserForm.reset();
  DisplayData();
});

// Display data
function DisplayData() {
  tbody.innerHTML = "";
  users.forEach((user, index) => {
    let row = `<tr>
                 <td>${index + 1}</td>
                 <td>${user.fname}</td>
                 <td>${user.lname}</td>
                 <td>${user.email}</td>
                 <td>${user.mobileNo}</td>
                 <td><button onclick="editUser(${index})">✏️ Edit</button></td>
                 <td><button onclick="deleteUser(${index})">❌ Delete</button></td>
               </tr>`;
    tbody.innerHTML += row;
  });
}

// Edit user
function editUser(index) {
  let user = users[index];
  fname.value = user.fname;
  lname.value = user.lname;
  email.value = user.email;
  password.value = user.password;
  mobileNo.value = user.mobileNo;
  editIndex = index;
}


// Delete user
function deleteUser(index) {
  // if (confirm("Are you sure you want to delete this user?")) { 
    users.splice(index, 1);
    localStorage.setItem("Users", JSON.stringify(users));
    DisplayData();
  // }
}

// Load on page load
DisplayData();
