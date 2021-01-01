// ==UserScript==
// @name		RegEx101 Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://regex101.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		setTimeout(() => {
			//Hide Header
			wmHide("header");
			wmAddNewStyle(`
				.fy8Gb {
					top: 0px;
				}
				._2q2Gx {
					top: 0px;
				}
			`);
			//Hide Donates
			wmHide("nav a[href*=paypal]");
			wmHide("nav a[href*=sponsors]");
			wmHide("nav ._234pj");
		}, 500);
	}
})();
