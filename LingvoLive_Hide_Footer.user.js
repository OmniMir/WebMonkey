// ==UserScript==
// @name		LingvoLive Hide Footer
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide that big black footer
// @author		kapsilon
// @license		MIT
// @match		https://www.lingvolive.com/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			document.querySelector("._3nyLP").style.display = "none";
		},
		false
	);
})();
