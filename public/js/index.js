$("#visit-notes").val("");

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function (example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function () {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function (id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

$("#sign-in-btn").on("click", function (event) {
  event.preventDefault();

  var doctorId = $("#doctor-id").val().trim()
  var url = "/doctor?id=" + doctorId
  console.log(url);
  window.location = url;
});

$("#new-patient-btn").on("click", function (event) {
  event.preventDefault();

  let params = new URLSearchParams(document.location.search.substring(1));
  let id = params.get("id");

  console.log(id);

  var newPatient = {
    firstName: $("#new-first-name").val().trim(),
    lastName: $("#new-last-name").val().trim(),
    email: $("#new-email").val().trim(),
    phone: $("#new-phone").val().trim(),
    address1: $("#new-address-1").val().trim(),
    address2: $("#new-address-2").val().trim(),
    city: $("#new-city").val().trim(),
    state: $("#new-state").val().trim(),
    zipcode: $("#new-zip").val().trim(),
    DoctorId: id
  };

  console.log(newPatient);

  if (!newPatient.firstName || !newPatient.lastName || !newPatient.email || !newPatient.phone || !newPatient.address1 || !newPatient.address2 || !newPatient.city || !newPatient.state || !newPatient.zipcode) {
    alert("You're missing a required field!");
  } else if(isNaN(newPatient.zipcode) === true) {
    alert("Zipcode needs to be a number");
  } else {
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/patients/",
      data: JSON.stringify(newPatient)
    }).then(function() {
      location.reload();
    })

    
  }

})

$("#add-visit-notes").on("click", function (event) {
  event.preventDefault();

  let params = new URLSearchParams(document.location.search.substring(1));
  let id = params.get("id");

  console.log(id);

  var newVisit = {
    notes: $("#visit-notes").val().trim(),
    patientId: id
  }

  console.log(newVisit);

  if (!newVisit.notes) {
    alert("Fill in the notes section.");
  } else {
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/visits",
      data: JSON.stringify(newVisit)
    }).then(function(response) {
      location.reload();
    })

  }
})