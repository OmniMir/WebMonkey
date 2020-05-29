// ==UserScript==
// @name		AliExpress Hide Top Banner
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Hide that huge top banner
// @author		kapsilon
// @license		MIT
// @match		https://*.aliexpress.com/*
// @match		https://aliexpress.ru/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide(".top-banner-container");
			},
		false
	);
})();
