// ==UserScript==
// @name		LingvoLive Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
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
	window.addEventListener(
		"load",
		function () {
			//Hide Grey Footer
			wmHide(".HLjpm");
			wmHide("._1404x");
			//Hide Grey Footer
			wmHide("._3nyLP");
		},
		false
	);
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
