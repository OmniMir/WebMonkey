// ==UserScript==
// @name		GoogleApps Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Hide annoying elements
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
			//Hide Add Task (GMail)
			wmRemove(".VJ");
			//Hide Apps Button
			wmHide(".gb_Sc");
			//Hide Side Panel (GMail)
			wmHide(".brC-dA-I-Jw");
			//Hide Side Panel (Google Docs)
			wmHide(".companion-collapser-button-container");
			//Hide Side Panel (Google Drive)
			wmHide(".Kk7lMc-QWPxkf-d-j");
			//Hide Support Button
			wmHide(".gb_Be");
			wmHide(".gb_Ee");
			wmHide(".zo");
		},
		false
	);
	//Hide Add Task (GMail)
	//Restart with changing of label&etc
	window.onhashchange = function () {
		//This function only for changes after '#' in URL, not for full URL change
		wmRemove(".VJ");
	};
})();
