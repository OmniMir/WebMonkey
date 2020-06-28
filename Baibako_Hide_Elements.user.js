// ==UserScript==
// @name		Baibako Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Hide Big Footer
// @author		kapsilon
// @license		MIT
// @match		http://baibako.tv/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide("#wrap2");
		},
		false
	);
})();
