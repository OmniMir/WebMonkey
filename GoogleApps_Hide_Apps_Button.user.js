// ==UserScript==
// @name		GoogleApps Hide Apps Button
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide button to various google apps
// @author		kapsilon
// @license		MIT
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
			document.querySelector(".gb_Sc").style.display = "none";
		},
		false
	);
})();
