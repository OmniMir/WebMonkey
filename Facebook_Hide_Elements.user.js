// ==UserScript==
// @name		Facebook Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.facebook.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Promote post Buttons
			wmRemoveAll(".bq4bzpyk .bkfpd7mw.j83agx80");
		},
		false
	);
	//Going with page scroll
	window.addEventListener(
		"scroll",
		function () {
			//Hide Promote post Buttons
			wmRemoveAll(".bq4bzpyk .bkfpd7mw.j83agx80");
		},
		false
	);
})();
