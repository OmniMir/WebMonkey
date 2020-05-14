// ==UserScript==
// @name		GMail Hide SidePanel
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide button to call right sidebar
// @author		kapsilon
// @license		MIT
// @match		https://mail.google.com/mail/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			document.querySelector(".brC-dA-I-Jw").style.display = "none";
		},
		false
	);
})();
