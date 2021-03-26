// ==UserScript==
// @name		Wikipedia HotKeys
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Press E/R to change Language
// @author		kapsilon
// @match		https://*.wikipedia.org/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press E to English
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "KeyE") {
				wmClick(".interwiki-en a");
			}
		},
		false
	);
	//Press R to Russian
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "KeyR") {
				wmClick(".interwiki-ru a");
			}
		},
		false
	);
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Language Menu
			wmHide("#p-lang");
		},
		false
	);
})();
