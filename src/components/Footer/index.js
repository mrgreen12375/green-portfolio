import React from "react";

function Footer() {
	return (
		<footer>
			<a href="https://github.com/mrgreen12375" target="_blank"><img className="footerContact" src={require("../../assets/icons/github.png")} alt="Github"/></a>
			<a href="https://www.linkedin.com/in/steven-green-12052923a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhxrF%2BYKFQEy3idnabYjWZQ%3D%3D" target="_blank"><img className="footerContact" src={require("../../assets/icons/linkedin.png")} alt="LinkedIn"/></a>
			<a href="tel:4806921756" target="_blank"><img className="footerContact" src={require("../../assets/icons/phone.jpg")} alt="Phone"/></a>
			<a href="mailto:ste2144105@gmail.com" target="_blank"><img className="footerContact" src={require("../../assets/icons/email.jpg")} alt="Email"/></a>
		</footer>
	);
}

export default Footer;
