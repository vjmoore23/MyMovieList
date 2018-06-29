//Function to validate email pattern input
function checkEmail() {
    
    errorEmail = document.querySelector('#SpanEmail');
	//Variable reference to email input
    var email = document.getElementById('emaill');
	//Variable that holds pattern for email input
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//Test the email input against the pattern
    if (!filter.test(email.value)) {
	//Alert message for incorrect input
    errorEmail.textContent = "     Email address is not valid.";
    email.focus;
    return false;
 }
}

//Function for confirm password validation
function confirmPassword() {
        
        errorPassword = document.querySelector('#SpanPassword');
		//Set variable to password
        var password = document.getElementById("password").value;
		//Set variable to confirmation password
        var vPassword = document.getElementById("Vpassword").value;
		//Check if passwords match
        if(password != vPassword) {
			//Alert message password do not match
            errorPassword.textContent = "  Passwords do not match.";
           
            
        }
}

//Function to validate form
function validate()
{
    if(document.myform.onsubmit &&
    !document.myform.onsubmit())
    {
        return;
    }
 document.myform.submit();
}

//Function clears text from all fields in form
function reset() {
document.getElementById("form").reset();
}

//Function to disable the enter key
function noenter() {
    return !(window.event && window.event.keyCode == 13); 
   }