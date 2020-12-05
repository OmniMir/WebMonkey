// ==UserScript==
// @name		AliExpress HotKey Control
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	AliExpress in Control
// @author		kapsilon
// @license		MIT
// @match		https://aliexpress.com/item/*
// @match		https://aliexpress.ru/item/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Set Delivery from CHINA
			wmClick(".sku-property-text");
		},
		false
	);
})();
