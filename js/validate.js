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
          maxlength: "You can max enter 500 characters",
				}
      }
		});

    $('#clearform').on('click', function () {
        $('#message').val('');
        $("#hire-form").validate().resetForm();
     });

});
