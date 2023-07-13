$("#leftside-navigation .sub-menu > a").click(function (e) {
  $("#leftside-navigation ul ul").slideUp(),
    $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation();
});

$(document).ready(function () {
  // Activate tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Select/Deselect checkboxes
  var checkbox = $('table tbody input[type="checkbox"]');
  $("#selectAll").click(function () {
    if (this.checked) {
      checkbox.each(function () {
        this.checked = true;
      });
    } else {
      checkbox.each(function () {
        this.checked = false;
      });
    }
  });
  checkbox.click(function () {
    if (!this.checked) {
      $("#selectAll").prop("checked", false);
    }
  });
});

// ------add new badge

const submitAddBadge = document.getElementById("addBadgeBtn");
const addBadgeForm = document.getElementById("addBadge-form");
submitAddBadge.removeAttribute("data-dismiss");
// addBadgeForm.addEventListener("submit", () => {
//   console.log("alerted");
// });
submitAddBadge.addEventListener("click", (e) => {
  e.preventDefault();

  let title = document.getElementById("addTitle");
  let department = document.getElementById("addDepartment");
  let startDate = document.getElementById("addStart");
  let endDate = document.getElementById("addEnd");
  let startDateValue = startDate.value.split("-").reverse().join("-");
  let endDateValue = endDate.value.split("-").reverse().join("-");
  console.log(startDateValue);
  let description = document.getElementById("addDescription");
  let created = document.getElementById("addCreated");
  console.log(startDate.value);
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${title.value}</td>
  <td>${department.value}</td>
  <td>${startDateValue}</td>
  <td>${endDateValue}</td>
  <td>${description.value}</td>
  <td>${created.value}</td>
  
   <td>
          <a href="#editEmployeeModal" onClick="editPost(this)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip"
              title="Edit">&#xE254;</i></a>
          <a href="#deleteEmployeeModal" onclick="deletePost(this)" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip"
              title="Delete">&#xE872;</i></a>
        </td>
  `;
  const table = document.getElementById("tbody");
  table.appendChild(newRow);

  title.value = "";
  department.value = "";
  startDate.value = "";
  endDate.value = "";
  description.value = "";
  created.value = "";

  submitAddBadge.setAttribute("data-dismiss", "modal");
});

// -------edit badge

function editPost(e) {
  let name = document.getElementById("editTitle");
  let email = document.getElementById("editDepartment");

  const items = e.parentElement.parentElement.children;
  name.value = items[0].innerText;
  email.value = items[1].innerText;

  const conSave = document.getElementById("conSave");
  conSave.removeAttribute("data-dismiss");
  conSave.addEventListener("click", (e) => {
    e.preventDefault();
    items[0].innerText = name.value;
    items[1].innerText = email.value;

    conSave.setAttribute("data-dismiss", "modal");
  });
}

// ----- delete badge

function deletePost(e) {
  const dltBtn = document.getElementById("conDlt");
  dltBtn.removeAttribute("data-dismiss");

  dltBtn.addEventListener("click", (delEve) => {
    delEve.preventDefault();
    e.parentElement.parentElement.remove();

    dltBtn.setAttribute("data-dismiss", "modal");
  });
}
