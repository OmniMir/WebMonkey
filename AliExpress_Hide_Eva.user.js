// ==UserScript==
// @name		AliExpress Hide Eva
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Hide annoying chatbot
// @author		kapsilon
// @license		MIT
// @match		https://*.aliexpress.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmWaitAndHide("#J_xiaomi_dialog");
		},
		false
	);
})();
