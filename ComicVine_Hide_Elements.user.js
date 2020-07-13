// ==UserScript==
// @name		ComicVine Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://comicvine.gamespot.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide all Advertisements
			wmRemoveAll(".mapped-ad");
			wmRemove(".js-taboola-module");
		},
		false
	);
})();
