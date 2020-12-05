// ==UserScript==
// @name		ComicsDB Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://comicsdb.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Remove Random comics
			wmHide(".panel-primary");
			//Remove Donations
			wmHide(".alert-warning");
			//Remove Ads
			wmHide(".alert-warning + div");
			//Remove Footer (Only last .well)
			let cssSelector = ".container > .well"
			if (document.querySelector(cssSelector)) {
				let selectors = document.querySelectorAll(cssSelector);
				//Choosing only last link
				if (selectors) {
					selectors[selectors.length - 1].remove();
				}
			}
		},
		false
	);
})();
