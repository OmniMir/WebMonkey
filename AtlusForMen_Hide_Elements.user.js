// ==UserScript==
// @name		AtlasForMen Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.atlasformen.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Full-Screen Pop-Up
			wmWaitAndRemove(".k-popup__wrap");
			//Hide Chat
			setTimeout(() => {
				wmRemove("jdiv");
				wmRemove("jdiv");
			}, 8000);
		},
		false
	);
})();
