// ==UserScript==
// @name		AliExpress Hide Eva
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide annoying chatbot
// @author		kapsilon
// @license		MIT
// @match		https://*.aliexpress.com/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			setTimeout(() => {
				document.querySelector("#J_xiaomi_dialog").style.display = "none";
			}, 2000);
		},
		false
	);
})();
