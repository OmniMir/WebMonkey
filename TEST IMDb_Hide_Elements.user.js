// ==UserScript==
// @name		TEST IMDb Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.imdb.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Editorial Lists
			wmHide("#relatedEditorialListsWidget");
			//Hide User Lists
			wmHide("#relatedListsWidget");
			//Hide User Pols
			wmHide(".poll-widget-rhs");
			//Hide Recently viewed
			wmHide("#rvi-div");
			//Hide Footer
			wmHide("footer");
		},
		false
	);
})();
