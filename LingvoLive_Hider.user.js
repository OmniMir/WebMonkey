// ==UserScript==
// @name		LingvoLive Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.lingvolive.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Cards Blinking Dot
		wmHide("._3685o");
		wmHide("._3-f2N");
		wmHide("GQ2Hn");
		//Hide Transparent Footer
		wmHide(".bg1lt");
		//Hide Grey Footer
		wmHide(".HLjpm");
		wmHide("._1404x");
		//Hide Grey Footer
		wmHide("._3nyLP");
	}

	//Going with page scroll
	window.addEventListener(
		"scroll",
		function () {
			//Hide Grey Footer
			wmHide(".HLjpm");
			wmHide("._1404x");
			//Hide Black Footer
			wmHide("._3nyLP");
		},
		false
	);
})();
