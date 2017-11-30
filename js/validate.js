$(document).ready(function() {
  $('#hire-form').validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
			message: {
				required: true,
				minlength: 10,
        maxlength: 500,
			},
		},
		messages: {
			name: "Please write your name!",
			email: {
				required: "Enter your email address",
				email: "Please enter a valid email"
      },
			message: {
				required: "Please, write something about the project",
				minlength: "You need to enter at least 10 characters",
        maxlength: "You can max enter 500 characters"
			}
    },
    submitHandler: function(form) {
      $.ajax({
          url: form.action,
          type: form.method,
          data: $(form).serialize(),
          dataType: "json",
          success: function(response) {
            $("#feedback").html("<p>Thank you for submitting " + response.data.name + "!</p>");
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            $("#feedback").html("<p>There was an error</p>");
          }
      });
      event.preventDefault();
    }
  });
});

$('#clearform').on('click', function () {
    $('#message').val('');
    $("#hire-form").validate().resetForm();
    $("#feedback").html("");

 });
