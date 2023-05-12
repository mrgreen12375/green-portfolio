import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_ne8wkbc', 'template_x2j4ul9', form.current, 'AwGlOpVNrsYdPprnj')
			.then(
				(result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			}
		);
		e.target.reset()
	};

	function handleEmail(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("email is invalid.");
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
		if (e.target.name === "name" || e.target.name === "subject" || e.target.name === "message") {
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
				<form className="form" ref={form} onSubmit={sendEmail}>
					<div>
						<label className="contactTitle">Name:</label>
						<input className="userInput" type="text" onBlur={handleEmpty} name="name"/>
					</div>
					<div>
						<label className="contactTitle">Email:</label>
						<input className="userInput" type="email" onBlur={handleEmail} name="email"/>
					</div>
										<div>
						<label className="contactTitle">Subject:</label>
						<input className="userInput" type="text" onBlur={handleEmpty} name="subject"/>
					</div>
					<div>
						<label className="contactTitle">Message:</label>
						<textarea className="messageInput" onBlur={handleEmpty} name="message"/>
					</div>
					{errorMessage && (
						<div>
							<p>{errorMessage}</p>
						</div>
					)}
					<button className="submitButton" type="submit" value="send">Submit</button>
				</form>
			</div>
		</main>
	);
}

export default Contact;
