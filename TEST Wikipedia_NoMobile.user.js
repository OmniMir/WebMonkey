// ==UserScript==
// @name		TEST Wikipedia NoMobile
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Leaving mobile version
// @author		kapsilon
// @license		MIT
// @match		https://*.m.wikipedia.org/*
// @match		https://*.m.wiktionary.org/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Leaving .m-sites in past
			let currentURL = document.URL;
			currentURL = currentURL.replace(".m.wik", ".wik");
			//Open URL in SAME TAB
			window.open(currentURL, "_self");
		},
		false
	);
})();
