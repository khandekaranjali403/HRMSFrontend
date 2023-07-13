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

// Data for badges
const badgesData = [
  {
    name: "Tax",
    description: "refer to tax slabs",
    type: "Deduction",
    status: "checked",
    created: "-",
  },
  {
    name: "Bonus",
    description: "annual bonus",
    type: "Allowance",
    status: "checked",
    created: "-",
  },
  {
    name: "HRA",
    description: " ---",
    type: "Allowance",
    status: "checked",
    created: "-",
  },
  {
    name: "NPS",
    description: "Employee Contribution",
    type: "Deduction",
    status: " ",
    created: "-",
  },
];

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
  let description = document.getElementById("addDescription");
  let type = document.getElementById("addType");
  let created = document.getElementById("addCreated");

  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name.value}</td>
  <td>${description.value}</td>
  <td>${type.value}</td>
   <td>
          <div class="toggle">
            <input type="checkbox">
            <label for="" class="onbtn">On</label>
            <label for="" class="ofbtn">Off</label>
          </div>
        </td>
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

  name.value = "";
  description.value = "";
  type.value = "";
  created.value = " ";
  submitAddBadge.setAttribute("data-dismiss", "modal");
});

// -------edit badge

function editPost(e) {
  let editname = document.getElementById("editName");
  let editdescription = document.getElementById("editDescription");
  let edittype = document.getElementById("editType");
  let editcreated = document.getElementById("editCreated");
  const items = e.parentElement.parentElement.children;
  console.log(items);
  editname.value = items[0].innerText;
  editdescription.value = items[1].innerText;
  edittype.value = items[2].innerText;
  editcreated.value = items[4].innerHTML;

  const conSave = document.getElementById("conSave");
  conSave.removeAttribute("data-dismiss");
  conSave.addEventListener("click", (e) => {
    e.preventDefault();
    items[0].innerText = editname.value;
    items[1].innerText = editdescription.value;
    items[2].innerHTML = edittype.value;
    items[4].innerHTML = editcreated.value;
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
