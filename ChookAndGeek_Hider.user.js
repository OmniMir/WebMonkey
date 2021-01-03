// ==UserScript==
// @name		ChookAndGeek Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.chookandgeek.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Top Panel
			wmHide(".section--top_panel");
			//Hide Social Media
			wmHide(".sidebar_block:nth-child(2)");
			//Hide Recently Watched Section
			wmHide(".js-recently_view-wrapper");
			//Hide Footer
			wmHide("footer");
		},
		false
	);
})();
