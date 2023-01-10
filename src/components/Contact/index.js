import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleEmail(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleEmpty(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<main>
			<h2>Contact</h2>
			<div>
				<form className="form">
					<div>
						<label className="contactTitle">Name:</label>
						<input className="userInput" type="text" defaultValue={name} onBlur={handleEmpty} name="Name"/>
					</div>
					<div>
						<label className="contactTitle" htmlFor="email">Email address:</label>
						<input className="userInput" type="email" defaultValue={email} name="email" onBlur={handleEmail}/>
					</div>
					<div>
						<label className="contactTitle" htmlFor="Message">Message:</label>
						<textarea className="messageInput" name="Message" defaultValue={message} onBlur={handleEmpty}/>
					</div>
					{errorMessage && (
						<div>
							<p>{errorMessage}</p>
						</div>
					)}
					<button className="submitButton" type="submit">Submit</button>
				</form>
			</div>
		</main>
	);
}

export default Contact;
