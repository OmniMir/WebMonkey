// ==UserScript==
// @name		AliExpress Bigger Messages
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Messages will be Bigger
// @author		kapsilon
// @license		MIT
// @match		https://message.aliexpress.com/*
// @match		https://msg.aliexpress.ru/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Bigger Messages
			wmAddNewStyle(`
				.im-app {
   					height: 1440px;
				}
			`);
		},
		false
	);
})();
