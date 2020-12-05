// ==UserScript==
// @name		CrackWatch Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://crackwatch.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Big Ad
			wmWaitAndHide("div[style='margin-top: 35px; text-align: center;']")
			//Hide Chat
			wmHide(".support")
			//Hide Footer
			wmHide(".Footer");
		},
		false
	);
})();
