import React from "react";

function Nav(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul>
				<li className={currentTab === "about" ? "link active" : "link"}>
					<span onClick={() => setCurrentTab("about")}>About</span>
				</li>
				<li className={currentTab === "portfolio" ? "link active" : "link"}>
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</li>
				<li className={currentTab === "contact" ? "link active" : "link"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
				<li className={currentTab === "resume" ? "link active" : "link"}>
					<span onClick={() => setCurrentTab("resume")}>Resumè</span>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
