// ==UserScript==
// @name		PWNews Big Fonts
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Set fonts BIGGER
// @author		kapsilon
// @license		MIT
// @match		https://pwnews.net/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//News Post (with inline style)
			document.querySelector("div[style*='font-size:10.4pt;']").style.fontSize = "13pt"
			//Comments
			wmAddNewStyle(`
				.mcontcomm {
					line-height: 15px;
					font-size: 15px;
				}
			`);

		},
		false
	);
})();
