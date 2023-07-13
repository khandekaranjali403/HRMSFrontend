$("#leftside-navigation .sub-menu > a").click(function (e) {
  $("#leftside-navigation ul ul").slideUp(),
    $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation();
});

$(document).ready(function () {
  // Activate tooltip
  $('[data-toggle="tooltip"]').tooltip();
});

// start for control coding
var addBtn = document.querySelector("#add-btn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-icon");

addBtn.onclick = function () {
  modal.classList.add("active");
};
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* start all global variable */

var userData = [];
var idEl = document.querySelector("#id");
var nameEl = document.getElementById("name");
var l_nameEl = document.getElementById("l-name");
var emailEl = document.getElementById("email");
// var officeEl = document.querySelector("#office-code");
// var jobTitleEl = document.querySelector("#job-title");

var registerBtn = document.querySelector("#register-btn");
var registerForm = document.querySelector("#register-form");
// var imgUrl;

/* end all global variable */
/* start register coding */
registerBtn.onclick = function (e) {
  e.preventDefault();
  registrationData();
  getDataFromLocal();
  registerForm.reset("");
  closeBtn.click();
};

if (localStorage.getItem("userData") != null) {
  userData = JSON.parse(localStorage.getItem("userData"));
}

function registrationData() {
  userData.push({
    id: idEl.value,
    name: nameEl.value,
    l_name: l_nameEl.value,
    email: emailEl.value,
    // officeCode: officeEl.value,
    // jobTitle: jobTitleEl.value,
    profilePic: "imagesprofile.png",
  });
  var userString = JSON.stringify(userData);
  localStorage.setItem("userData", userString);
  swal("Good job!", "You clicked the button!", "success");
}

// start returning data on page from localstorage

var tableData = document.querySelector("#table-data");

const getDataFromLocal = () => {
  tableData.innerHTML = "";
  userData.forEach((data, index) => {
    tableData.innerHTML += `

<tr index='${index}'>

<td>${index + 1}</td>
<td>${data.id}</td>
<td>${data.name}</td>
<td>${data.email}</td>

<td><button><i class="fa fa-eye"></i></button>

<button class="del-btn"><i class="fa fa-trash"></i></button></td>

</tr>

`;
  });

  /*start delete coding */

  var i;
  var allDelBtn = document.querySelectorAll(".del-btn");
  for (i = 0; i < allDelBtn.length; i++) {
    allDelBtn[i].onclick = function () {
      var tr = this.parentElement.parentElement;
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          userData.splice(id, 1);
          localStorage.setItem("userData", JSON.stringify(userData));
          tr.remove();
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    };
  }
};
getDataFromLocal();

//image processing

var profile_pic = document.querySelector("profile-pic");
var uploadPic = document.querySelector("upload-field");
uploadPic.onchange = function () {
  if (uploadPic.files[0].size < 1000000) {
    var fReader = new FileReader();
    fReader.onload = function (e) {
      // var imgUrl = e.target.result;
      // profile_pic.src = imgUrl;
      // console.log(imgUrl);
    };
    fReader.readAsDataURL(uploadPic.files[0]);
  } else {
    alert("file size is to large");
  }
};
