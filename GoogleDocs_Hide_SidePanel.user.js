// ==UserScript==
// @name		GoogleDocs Hide SidePanel
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide button to call right sidebar
// @author		kapsilon
// @license		MIT
// @match		https://docs.google.com/document/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			document.querySelector(".companion-collapser-button-container").style.display = "none";
		},
		false
	);
})();
