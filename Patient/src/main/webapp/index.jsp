<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/styles.css">
</head>
<body>
    <div class="container">
<div class="row">
	<div class="col-sm-4">
    
     
    </div>

	<div class="col-sm-4">
	<form id="formPatient" name="formPatient" method="post" action="Patient.jsp" ><br>
	
		<h3 class="text-center">Patient Page</h3><br>
	
		<input type="text" id="lastName" name="lastName" class="form-control form-control-sm" placeholder="Last Name" ><br>
		<input type="text" id="firstName" name="firstName" class="form-control form-control-sm" placeholder="First Name"><br>
		<input type="email" id="email" name="email" class="form-control form-control-sm" placeholder="Email Address"><br>
		<input type="text" id="role" name="role" class="form-control form-control-sm" placeholder= "Role"><br>
		<input type="text" id="streetNo" name="streetNo" class="form-control form-control-sm" placeholder="Postalcode"><br>
		<input type="text" id="city" name="city" class="form-control form-control-sm" placeholder="Street No"><br>
		<input type="text" id="postalcode" name="postalcode" class="form-control form-control-sm" placeholder="City"><br>
		<input type="text" id="password" name="password" class="form-control form-control-sm" placeholder="Password"><br>
		
		  <div class="container text-center">
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
	      </div>
			
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-info my-4 btn-block">
		
	</form>
	</div>
	
	


	

	<div class="row">
			<ul style="list-style: none;" id="apps" class="row" ></ul>
	</div>

   </div>
	
</div>


<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>


</body>

</body>
</html>
