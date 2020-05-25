// ==UserScript==
// @name		LingvoLive Hide Footer
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Hide that big black footer
// @author		kapsilon
// @license		MIT
// @match		https://www.lingvolive.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide("._3nyLP");
		},
		false
	);
})();
