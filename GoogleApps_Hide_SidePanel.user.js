// ==UserScript==
// @name		GoogleApps Hide SidePanel
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide button to call right sidebar
// @author		kapsilon
// @license		MIT
// @match		https://docs.google.com/document/*
// @match		https://drive.google.com/drive/*
// @match		https://mail.google.com/mail/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//GMail Side Panel
			if (document.querySelector(".brC-dA-I-Jw")) {
				document.querySelector(".brC-dA-I-Jw").style.display = "none";
			}
			//Google Drive Side Panel
			if (document.querySelector(".Kk7lMc-QWPxkf-d-j")) {
				document.querySelector(".Kk7lMc-QWPxkf-d-j").style.display = "none";
			}
			//Google Docs Side Panel
			if (document.querySelector(".companion-collapser-button-container")) {
				document.querySelector(".companion-collapser-button-container").style.display =	"none";
			}
		},
		false
	);
})();
