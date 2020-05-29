// ==UserScript==
// @name		Kaspersky_Hide_Shields
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying green shields from search
// @author		kapsilon
// @license		MIT
// @match		https://www.google.com/search*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Waiting to Kapsersky Protection Extension
			setTimeout(() => {
				//Search special image by name and hide all of them
				wmHideAll("h3 + img")
				wmHideAll("h3 > img")
			}, 2000);
		},
		false
	);
})();
