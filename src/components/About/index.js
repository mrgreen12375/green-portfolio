import React from 'react';

function About() {
	return (
	<main>
		<h2>About</h2>
		<img className="avatar" src={require('../../assets/images/avatar.jpg')} alt="avatar"/>
		<p className='about'>Hello, my name is Steven Green. I'm looking for a career in software engineering. 
		I have an associates degree from Estrella Mountain Community College and a certificate for Full Stack Web Development from University of Arizona.
		I am currently a teaching assistant for edX, teaching in a Full Stack Web Development bootcamp for ASU. Please explore 
		my portfolio to review the projects I have completed, contact information, and resumè. Looking forward to speaking with you about future employment 
		opportunities.</p>
		<p>Have a wonderful day!</p>
	</main>
	);
}

export default About;
