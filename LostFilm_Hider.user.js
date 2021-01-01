// ==UserScript==
// @name		LostFilm Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.lostfilm.tv/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Topper
		wmHide("a[href^='//www.lostfilm.tv/nelb.php']");
		//Hide Ads
		wmHide(".aodd");
		//Hide Footer
		wmHide(".footer");
	}

	//Hide All-over-page Ad
	wmAddNewStyle(`
		.lstfml {
			background: #b5b5b7;
		}
	`);
})();
