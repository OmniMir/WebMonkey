// ==UserScript==
// @name		AliExpress Hide Top Banner
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide that huge top banner
// @author		kapsilon
// @license		MIT
// @match		https://*.aliexpress.com/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			if (document.querySelector(".top-banner-container")) {
				document.querySelector(".top-banner-container").style.display = "none";
			}
		},
		false
	);
})();
