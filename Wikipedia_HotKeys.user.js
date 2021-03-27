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
	//Start on page load to take effect
	window.addEventListener("load", () => MenuHider(), false);
	//Start with Keydown
	window.addEventListener("keydown", (event) => HotKeys(event), false);

	//Hide Language Menu
	function MenuHider() {
		wmHide("#p-lang");
	}

	//Wikipedia HotKey Control
	function HotKeys(event) {
		//Press E to English
		if (event.code == "KeyE") {
			//Disable Default Action
			event.preventDefault();

			//Click Dates Link
			wmClick(".interwiki-en a");
		}

		//Press R to Russian
		if (event.code == "KeyR") {
			//Disable Default Action
			event.preventDefault();

			//Click Posters Link
			wmClick(".interwiki-ru a");
		}
	}
})();
