import React from "react";

function Resume() {
	return (
	<main>
        <h2>Resume</h2>
        <p className="resumeMargin">Download my <a className="resume" href={require("../../assets/resume/Steven Green.pdf")} download>resumè</a></p>
        <div className="proficiencies">
            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Disign</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
        </div>
        <div className="proficiencies">
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
				<li>Sequlize</li>
                <li>MongoDB</li>
				<li>Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    </main>
	);
}

export default Resume;
