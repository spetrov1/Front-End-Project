
var inputs = document.getElementsByClassName("input");

function showValidationMessage() {
	document.getElementById("validation").style.display = "block";
}

function validationFunc() {
	let insertedUserName = inputs[0].value;
	let insertedPassword = inputs[2].value;
	let checkValidity;

	document.getElementById("validation").innerHTML = "";

	let isPasswordCorrect = checkValidityPassword(insertedPassword);
	let isUserNameCorrect = checkValidityUserName(insertedUserName);

	checkValidity = isPasswordCorrect && isUserNameCorrect;

	if (checkValidity) {
		alert("The registration is made successfully!");
	} else {
		showValidationMessage();
	}

	return checkValidity;
}

function checkValidityPassword(insertedPassword) {
	let smallLetter = false;
	let capitalLetter = false;
	let specialLetter = false;
	let errorMessageField = document.getElementById("validation");

	for (char of insertedPassword) {
		if (char >= 'a' && char <= 'z') {
			smallLetter = true;
		} else if (char >= 'A' && char <= 'Z') {
			capitalLetter = true;
		} else if (char == '!' || char == '@' || char == '#' ||
			char == '$' || char == '%' || char == '^' || char == '&') {
			specialLetter = true;
		}
	}

	if (!smallLetter) {
		errorMessageField.innerHTML += "Password must contain at least one small letter!<BR>"
	}
	if (!capitalLetter) {
		errorMessageField.innerHTML += "Password must contain at least one capital letter!<BR>";
	}
	if (!specialLetter) {
		errorMessageField.innerHTML += "Password must contain at least one special letter (!@#$%^&)!<BR>";
	}
	if (insertedPassword.length < 6) {
		errorMessageField.innerHTML += "Password length must be at least 6 characters<BR>";
	}

	return smallLetter && capitalLetter &&
		specialLetter && insertedPassword.length >= 6;
}

/* Not used in project */
function checkValidityEmail(insertedEmail) {
	let standardCharacterMails = false;
	let isThereDot = false;
	let errorElement = document.getElementById("validation");

	for (char of insertedEmail) {
		if (char == '@') {
			standardCharacterMails = true;
		} else if (char == '.') {
			isThereDot = true;
		}
	}


	if (!standardCharacterMails) {
		errorElement.innerHTML += "There is not '@' character in your mail!<BR>";
	}
	if (!isThereDot) {
		errorElement.innerHTML += "There is not '.' in your mail<BR>";
	}
	if (insertedEmail.length < 5) {
		errorElement.innerHTML += "Your mail should contain at least 5 characters!<BR>";
	}

	return standardCharacterMails && isThereDot && insertedEmail.length >= 5;
}

function checkValidityUserName(insertedUserName) {
	let errorElement = document.getElementById("validation");

	let hasMinSizeLimit = insertedUserName.length > 5;
	let hasMaxSizeLimit = insertedUserName.length < 20;

	if (!hasMinSizeLimit) {
		errorElement.innerHTML += "User name has to be minimum 5 character long <BR>";
	}
	if (!hasMaxSizeLimit) {
		errorElement.innerHTML += "User name has to be maximum 20 charactes long! <BR>"
	}

	return hasMinSizeLimit && hasMaxSizeLimit;
}
