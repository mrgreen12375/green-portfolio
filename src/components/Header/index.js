import React from "react";
import Nav from "../Nav";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<h1>Steven Green</h1>
			<div>
				<Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
			</div>
		</header>
	);
}

export default Header;
