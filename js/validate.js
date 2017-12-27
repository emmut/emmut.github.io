//Validates the form and if validation is succeeded it runs a ajax request
$(document).ready(function() {
  $('#hire-form').validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
      subject: "required",
			message: {
				required: true,
				minlength: 10,
        maxlength: 500,
			},
      accept: "required"
		},
		messages: {
			name: "Please write your name!",
			email: {
				required: "Enter your email address",
				email: "Please enter a valid email"
      },
      subject: "",
			message: {
				required: "Please, write something about the project",
				minlength: "You need to enter at least 10 characters",
        maxlength: "You can max enter 500 characters"
			},
      accept: ""
    },
    submitHandler: function(form) {
      $.ajax({
        url: form.action,
        type: form.method,
        dataType: "json",
        // success: function(response) {
        //   $("#feedback").html("<p>Thank you for submitting!</p>");
        // },
        // error: function(jqXHR, textStatus, errorThrown) {
        //   console.log(textStatus, errorThrown);
        //   $("#feedback").html("<p>There was an error</p>");
        // }
    });
    //  event.preventDefault();
    }
  });
});

//Adds functionality to the reset button
$('#clearform').on('click', function () {
    $("#hire-form").validate().resetForm();
    $("#feedback").html('');

 });
