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


// -------edit badge

function editPost(e) {
  let name = document.getElementById("editName");
  let description = document.getElementById("editDescription");
  let type = document.getElementById("editType");
  let created = document.getElementById("editCreated");
  let reason = document.getElementById("editreason");
  let attachment = document.getElementById("editattachment");
  let activity = document.getElementById("editactivity");
  const items = e.parentElement.parentElement.children;
  name.value = items[0].innerText;
  description.value = items[1].innerText;
  type.value = items[2].innerText;
  created.value = items[3].innerHTML;
  reason.value = items[4].innerHTML;
  attachment.value = items[5].innerHTML;
  activity.value = items[6].innerHTML;
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
    items[6].innerHTML = activity.value;
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
