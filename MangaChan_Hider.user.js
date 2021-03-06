// ==UserScript==
// @name		MangaChan Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://manga-chan.me/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Top Picture Header
		wmHide("#top + div");
		//Hide donations
		wmHide("div[style='margin:10px;background:white;font-size:24px;padding: 15px;']");
	}
})();
