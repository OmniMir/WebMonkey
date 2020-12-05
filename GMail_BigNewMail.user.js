// ==UserScript==
// @name		GMail Big New Mail
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Some external hotkeys for gmail
// @author		kapsilon
// @match		https://mail.google.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Set New Mail Height Bigger
			wmAddNewStyle(`
				.GP {
					max-height: 800px !important;
					height: 800px !important;
				}
			`)
		},
		false
	);
})();
