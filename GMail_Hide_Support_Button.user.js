// ==UserScript==
// @name		GMail Hide Support Button
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide button to gmail support
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
			document.querySelector(".gb_Be").style.display = "none";
		},
		false
	);
})();
