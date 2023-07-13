$("#leftside-navigation .sub-menu > a").click(function (e) {
  $("#leftside-navigation ul ul").slideUp(),
    $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation();
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
  let description = document.getElementById("addDescription");
  let type = document.getElementById("addType");
  let created = document.getElementById("addCreated");
  let status = document.getElementById('addstatus');
  let salary = document.getElementById('addsalary');
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name.value}</td>
  <td>${description.value}</td>
  <td>${type.value}</td>
  <td>${created.value}</td>
  <td>${status.value}</td>
  <td>${salary.value}</td>
   <td>
          <a href="#editEmployeeModal" onClick="editPost(this)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip"
              title="Edit">&#xE254;</i></a>
         
        </td>
  `;
  const table = document.getElementById("tbody");
  table.appendChild(newRow);

  name.value = "";
  description.value = "";
  type.value = "";
  created.value = " ";
  status.value = " ";
  salary.value = " ";
  submitAddBadge.setAttribute("data-dismiss", "modal");
});

// -------edit badge

function editPost(e) {
  let name = document.getElementById("editName");
  let description = document.getElementById("editDescription");
  let type = document.getElementById("editType");
  let created = document.getElementById("editCreated");
  let reason = document.getElementById("editreason");
  let attachment = document.getElementById("editattachment");

  const items = e.parentElement.parentElement.children;
  name.value = items[0].innerText;
  description.value = items[1].innerText;
  type.value = items[2].innerText;
  created.value = items[3].innerHTML;
  reason.value = items[4].innerHTML;
  attachment.value = items[5].innerHTML;

  const conSave = document.getElementById("conSave");
  conSave.removeAttribute("data-dismiss");
  conSave.addEventListener("click", (e) => {
    e.preventDefault();
    items[0].innerText = name.value;
    items[1].innerText = description.value;
    items[2].innerHTML = type.value;
    items[3].innerHTML = created.value;
    items[4].innerHTML = reason.value;
    items[5].innerHTML = attachment.value;

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
