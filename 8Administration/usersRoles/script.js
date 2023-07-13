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

  let name = document.getElementById("addName");
  let email = document.getElementById("addEmail");
  let status = document.getElementsByName("status");
  let statusValue;
  if (status[0].checked) {
    statusValue = "checked";
  } else {
    statusValue = "";
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name.value}</td>
  <td>${email.value}</td>
  
   <td>
          <div class="toggle">
            <input type="checkbox" ${statusValue}>
            <label for="" class="onbtn">On</label>
            <label for="" class="ofbtn">Off</label>
          </div>
  </td>
   <td>
          <a href="#editEmployeeModal" onClick="editPost(this)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip"
              title="Edit">&#xE254;</i></a>
          <a href="#deleteEmployeeModal" onclick="deletePost(this)" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip"
              title="Delete">&#xE872;</i></a>
        </td>
  `;
  const table = document.getElementById("tbody");
  table.appendChild(newRow);

  name.value = "";
  email.value = "";

  submitAddBadge.setAttribute("data-dismiss", "modal");
});

// -------edit badge

function editPost(e) {
  let name = document.getElementById("editName");
  let email = document.getElementById("editEmail");

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
