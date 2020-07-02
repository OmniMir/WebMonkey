// ==UserScript==
// @name		AliExpress Hide Top Banner
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide that huge top banner
// @author		kapsilon
// @license		MIT
// @match		https://*.aliexpress.com/*
// @match		https://aliexpress.ru/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Top Banners
			wmHide(".top-banner-container");
			wmWaitAndHide("a[data-spm-anchor-id]");
		},
		false
	);
})();