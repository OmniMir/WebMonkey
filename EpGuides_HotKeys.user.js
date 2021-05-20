// ==UserScript==
// @name		EpGuides HotKeys
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Press W to Wikipedia
// @author		kapsilon
// @match		http://epguides.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start with Keydown
	window.addEventListener("keydown", (event) => HotKeys(event), false);

	function HotKeys(event) {
		//Press W to Wikipedia
		if (event.code == "KeyW") {
			wmClick(".Wiki a");
		}
		//Press G to Guide
		if (event.code == "KeyG") {
			wmClick(".TVMaze a");
		}
	}
})();
