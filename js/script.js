let form = document.querySelector("form");
let first = document.querySelector("#first");
let last = document.querySelector("#last");
let email = document.querySelector("#Email");
let username = document.querySelector("#Username");
let password = document.querySelector("#Password");
let passwordcheck = document.querySelector("#Password2");

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkinput();
});

function checkinput() {
	let firstvalue = first.value.trim();
	let lastvalue = last.value.trim();
	let emailvalue = email.value.trim();
	let usernamevalue = username.value.trim();
	let passwordvalue = password.value.trim();
	let passwordcheckvalue = passwordcheck.value.trim();

	//for the first name
	if(firstvalue === ''){
		//add error message
		error(first, "First Name cannot be blank");
	}
	else if (firstvalue.match(/^[a-zA-Z ]{2,30}$/)) {
		//add success for expression
		success(first);

	} else if(!firstvalue.match(/^[a-zA-Z ]{2,30}$/)){
		error(first, "Please enter character only");
	} else{
		error(first, "First Name cannot be blank");
	}

	//for the last name
	if(lastvalue === ""){
		//add error message
		error(last, "Last Name cannot be blank");
	}
	else if (lastvalue.match(/^[a-zA-Z ]{2,30}$/)) {
		//add success for expression
		success(last);

	} else if(!lastvalue.match(/^[a-zA-Z ]{2,30}$/)) {
		error(last, "Please enter character only");
	} else{
		error(last, "Last Name cannot be blank");
	}

	//for the email
	if(emailvalue === ""){
		//add error message
		error(email, "Email cannot be blank");
	}
	else if (emailvalue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{2,}[a-zA-Z0-9-\.]*$/)) {
		//add success for expression
		success(email);

	}
	else if (!emailvalue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{2,}[a-zA-Z0-9-\.]*$/)) {
		//add success for expression
		error(email, "Your email is invalid");

	} else{
		error(email, "Your email is mistake");
	}

	//for the username
	if(usernamevalue === ""){
		//add error message
		error(username, "Username cannot be blank");
	}
	else if (usernamevalue.match(/^[a-zA-Z0-9]{3,30}$/)) {
		//add success for expression
		success(username);

	}
	else if (!usernamevalue.match(/^[a-zA-Z0-9]{3,30}$/)) {
		//add success for expression
		error(username, "Your username is invalid");

	} else{
		error(username, "Your username is mistake");
	}

	//for the password
	if(passwordvalue === ""){
		//add error message
		error(password, "Password cannot be blank");
	} else{
		success(password);
	}

	//for the username name
	if(passwordcheckvalue === ""){
		//add error message
		error(passwordcheck, "Password cannot be blank");
	} else if(passwordcheckvalue != passwordvalue){
		error(passwordcheck, "password does not match");
	} else if(passwordcheckvalue === passwordvalue){
		success(passwordcheck);
	}
	else{
		success(passwordcheck);
	}
}

function error(input,message){
	//add parent class of input
	let forminput = input.parentElement;
	let p = forminput.querySelector("p");

	//add error message under p
	p.innerText = message;

	//add class for error message
	forminput.className = 'form-input error';
}

function success(input){
	let forminput = input.parentElement;
	forminput.className = "form-input success";
}