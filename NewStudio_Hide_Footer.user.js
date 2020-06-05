// ==UserScript==
// @name		NewStudio Hide News
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide Big News Accordion
// @author		kapsilon
// @license		MIT
// @match		http://newstudio.tv/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide("#newswrap");
		},
		false
	);
})();
