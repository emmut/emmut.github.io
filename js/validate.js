//Validerar formuläret #hire-form och om det lyckas så kör den en ajaxförfrågan
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
      subject: "", //Sitter ihop med #message så jag lämnade den tom
			message: {
				required: "Please, write something about the project",
				minlength: "You need to enter at least 10 characters",
        maxlength: "You can max enter 500 characters"
			},
      accept: "" //Kännde inte att det behövdes text för en checkbox
    },
    //Kör ajaxförfrågan
    submitHandler: function(form) {
      $.ajax({
        url: form.action,
        type: form.method,
        data: $(form).serialize(),
        dataType: "json",
        success: function(response) {
          $("#feedback").html("<p>Thank you for submitting " + response.data.name + "!</p>");
          //Skriver ut det inhämtade namnet, kändet inte att jag ville göra något mer med den inhämtade datan på klientsidan
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
          $("#feedback").html("<p>There was an error</p>");
        }
      });
    }
  });
});

//Lägger till lite extra funktionalitet till reset-knappen
$('#clearform').on('click', function () {
    $("#hire-form").validate().resetForm(); //Återställer valideringen
    $("#feedback").html(''); //Tar bort #feedback

 });
