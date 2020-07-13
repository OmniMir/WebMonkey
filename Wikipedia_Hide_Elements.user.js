// ==UserScript==
// @name		Wikipedia Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://*.wikipedia.org/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Edit Buttons
			wmHideAll(".mw-editsection");
			//Hide Footer
			wmHide("#footer");
		},
		false
	);
})();
