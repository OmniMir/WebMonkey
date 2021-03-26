// ==UserScript==
// @name		AliExpress HotKeys
// @namespace	https://vash.omnimir.ru/
// @version		0.8
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
			if (!document.querySelector(".sku-property-item.selected > .sku-property-text")) {
				wmClick(".sku-property-text");
			}
		},
		false
	);
})();
