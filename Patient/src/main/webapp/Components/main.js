$(document).ready(function()
{
	 $("#alertSuccess").hide();
	 $("#alertError").hide();
}); 


$(function (){
	var $apps = $('#apps');
	var $lastName = $('#lastName');
	var $firstName = $('#firstName');
	var $email = $('#email');
	var $role = $('#role');
	var $streetNo = $('#streetNo');
	var $city = $('#city');
	var $postalcode = $('#postalcode');
	var $password = $('#password');
	

	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/Patient/webapi/Patient/patient',
		success: function(apps){
			//console.log('success',data);
			$.each(apps, function(i, app){
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
							+'Last Name:<span class="noedit lastName">' + app.lastName +'</span><input class="edit lastName"/>'+'<br>'
							+'First Name:<span class="noedit firstName">'+ app.firstName +'</span><input class="edit firstName"/> '+'<br>'
							+'Email Address:<span class="noedit email">'+ app.email +'</span><input class="edit email"/> '+'<br>'
							+'Role:<span class="noedit role">'+ app.role +'</span><input class="edit role"/> '+'<br>'
							+'Street Number:<span class="noedit streetNo">'+ app.streetNo +'</span><input class="edit streetNo"/>'+' <br>'
							+'City:<span class="noedit city">'+ app.city +'</span><input class="edit city"/>'+'<br>'
							+'Postal Code:<span class="noedit postalcode">'+ app.postalcode +'</span><input class="edit postalcode"/>'+'<br>'
							+'Password:<span class="noedit password">'+ app.password +'</span><input class="edit password"/>'+'<br>'
							+'<input type="button" id="'+ app.PID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
							+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
							+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
							+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');

			});
		},
		error: function() {
			alert('Patient loading error...');
		}
	});
	
	
	$('#btnSave').on('click', function(){
		
		//clear status messages
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		
		//Form validation
		var status = validatePatientForm(); 
		

		
		//Check not valid
		if (status != true)
		 {
			 $("#alertError").text(status);
			 $("#alertError").show();
			 return;
		 } 
		
		
        //IF valid		
		var app = {
				lastName: $lastName.val(),
				firstName: $firstName.val(),
				email: $email.val(),
				role: $role.val(),
				streetNo: $streetNo.val(),
				city: $city.val(),
				postalcode: $postalcode.val(),
				password: $password.val(),
		};
		

		
		$.ajax({
			headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
			type: 'POST',
			url: 'http://localhost:8080/Patient/webapi/Patient/patient',
			data: JSON.stringify(app),
			dataType: 'json',
			success: function(newPatient){
				console.log("Inserted");
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 12rem;float: left;">'
						+'Last Name:<span class="noedit name">' + newPatient.lastName +'</span><input class="edit lastName"/>'+'<br>'
						+'First Name:<span class="noedit nic">'+ newPatient.firstName +'</span><input class="edit firstName"/> '+'<br>'
						+'Email Address:<span class="noedit phone">'+ newPatient.email +'</span><input class="edit email"/> '+'<br>'
						+'Role:<span class="noedit email">'+ newPatient.role +'</span><input class="edit role"/>'+'<br>'
						+'Street Number:<span class="noedit reportID">'+ newPatient.streetNo +'</span><input class="edit streetNo"/> '+'<br>'
						+'City:<span class="noedit sessionID">'+ newPatient.city +'</span><input class="edit city"/>'+' <br>'
						+'Postal Code:<span class="noedit patientID">'+ newPatient.postalcode +'</span><input class="edit postalcode"/>'+'<br>'
						+'Password:<span class="noedit patientID">'+ newPatient.password +'</span><input class="edit password"/>'+'<br>'
						+'<input type="button" id="'+ newPatient.PID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
						+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
						+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
						+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');
				
				//Show Success Message
				$("#alertSuccess").text("Your Patient Details Saved Successfully");
				$("#alertSuccess").show();

				$("#formPatient")[0].reset(); 
				
			},
			
			error: function() {
				alert('Patient Saving Error');
			}
		});
		
		function validatePatientForm()
		{
			// Last NAME
			if ($("#lastName").val().trim() == "")
			 {
			 return "Insert last name.";
			 }

			//First NAME
			if ($("#firstName").val().trim() == "")
			 {
			 return "Insert first name.";
			 }

			//email
			if ($("#email").val().trim() == "")
			 {
			 return "Insert email address.";
			 }

			//role
			if ($("#role").val().trim() == "")
			 {
			 return "Insert role.";
			 }

			if ($("#streetNo").val().trim() == "")
			 {
			 return "Insert street number.";
			 }


			if ($("#city").val().trim() == "")
			 {
			 return "Insert city.";
			 }

			if ($("#postalcode").val().trim() == "")
			{
			return "Insert postal code.";
			}

			if ($("#password").val().trim() == "")
			 {
			 return "Insert password.";
			 }

			return true;
		}
		

		
	});
	
	
	$apps.delegate('.remove','click',function(){
		var $li=$(this).closest('li');
		var self = this;
		$.ajax({
			type:'DELETE',
			url:'http://localhost:8080/Patient/webapi/Patient/patient/'+$(this).attr('id'),
			success: function(){
				console.log("Deleted");
				$(self);
				$li.fadeOut(300,function(){
					$(this).remove();
					
					
					
				})
				
			},
		
			error: function() {
				alert('Patient Delete Error');
			}
		});
	});
	
	
	$apps.delegate('.editapp','click',function(){
		
		var $li=$(this).closest('li');
		
		$li.find('input.lastName').val($li.find('span.lastName').html());
		$li.find('input.firstName').val($li.find('span.firstName').html());
		$li.find('input.email').val($li.find('span.email').html());
		$li.find('input.role').val($li.find('span.role').html());
		$li.find('input.streetNo').val($li.find('span.streetNo').html());
		$li.find('input.city').val($li.find('span.city').html());
		$li.find('input.postalcode').val($li.find('span.postalcode').html());
		$li.find('input.password').val($li.find('span.password').html());
		$li.addClass('edit');
	});
	
	$apps.delegate('.canceledit','click',function(){
		$(this).closest('li').removeClass('edit');
		
	});
	
	$apps.delegate('.saveedit','click',function(){
		var $li=$(this).closest('li');
		var app={

				lastName: $li.find('input.lastName').val(),
				firstName: $li.find('input.firstName').val(),
				email: $li.find('input.email').val(),
				role: $li.find('input.role').val(),
				streetNo: $li.find('input.streetNo').val(),
				city: $li.find('input.city').val(),
				postalcode: $li.find('input.postalcode').val(),
				password: $li.find('input.password').val()
				
		};
		
		$.ajax({
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
					
					
			},
			type: 'PUT',
			url: 'http://localhost:8080/Patient/webapi/Patient/patient',
			data: JSON.stringify(app),
			dataType: 'json',
			
			success: function(newPatient){

				$li.find('span.lastName').html(app.lastName);
				$li.find('span.firstName').html(app.firstName);
				$li.find('span.email').html(app.email);
				$li.find('span.role').html(app.role);
				$li.find('span.streetNo').html(app.streetNo);
				$li.find('span.city').html(app.city);
				$li.find('span.postalcode').html(app.postalcode);
				$li.find('span.password').html(app.password);
				$li.removeClass('edit');
				
				$("#alertSuccess").text("Your Patient Details Updated Successfully");
				$("#alertSuccess").show();
				},
		
				error: function(){
				alert('Patient Update Error');
			}
			
		});
	});
	
	
	
	
	
	
});