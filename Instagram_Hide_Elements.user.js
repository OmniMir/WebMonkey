// ==UserScript==
// @name		Instagram Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide Annoying Elements
// @author		kapsilon
// @license		MIT
// @match		https://www.instagram.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide New Posts Notification
			wmWaitWaitAndRemove("._7EEvc");
		},
		false
	);
	//Hide annoying red dot
	//via CSS because pseudo selectors are NOT just selected
	wmAddNewStyle(`
		.q9xVd::after {
			display: none;
		}
	`);
})();
