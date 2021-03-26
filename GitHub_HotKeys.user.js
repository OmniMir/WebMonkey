// ==UserScript==
// @name		GitHub HotKeys
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Press DOWN to get raw file
// @author		kapsilon
// @match		https://github.com/*/blob/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press DOWN to RAW
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				wmClick("#raw-url");
			}
		},
		false
	);
})();
