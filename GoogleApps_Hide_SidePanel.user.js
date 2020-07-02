// ==UserScript==
// @name		GoogleApps Hide SidePanel
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide button to call right sidebar
// @author		kapsilon
// @license		MIT
// @match		https://docs.google.com/document/*
// @match		https://drive.google.com/drive/*
// @match		https://mail.google.com/mail/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
<<<<<<< Updated upstream:GoogleApps_Hide_SidePanel.user.js
			//GMail Side Panel
			wmHide(".brC-dA-I-Jw");
			//Google Drive Side Panel
			wmHide(".Kk7lMc-QWPxkf-d-j");
			//Google Docs Side Panel
			wmHide(".companion-collapser-button-container");
=======
			//Hide Add Task (GMail)
			wmRemove(".VJ");
			//Hide Apps Button
			wmHide(".gb_Sc");
			//Hide ViewMode Button (GMail)
			wmHideAll(".Cr.aqJ .G-Ni.J-J5-Ji");
			//Hide Side Panel (GMail)
			wmWaitAndHide(".brC-dA-I-Jw");
			//Hide Side Panel (Google Docs)
			wmWaitAndHide(".companion-collapser-button-container");
			//Hide Side Panel (Google Drive)
			wmWaitAndHide(".Kk7lMc-QWPxkf-d-j");
			//Hide Support Button
			wmWaitAndHide(".gb_Be");
			wmWaitAndHide(".gb_Ee");
			wmWaitAndHide(".zo");
>>>>>>> Stashed changes:GoogleApps_Hide_Elements.user.js
		},
		false
	);
})();
