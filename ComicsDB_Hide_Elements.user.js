// ==UserScript==
// @name		ComicsDB Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
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
			//Remove Footer
			wmHide(".container > .well");
		},
		false
	);
})();
