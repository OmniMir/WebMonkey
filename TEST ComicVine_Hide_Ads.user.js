// ==UserScript==
// @name		TEST ComicVine_Hide_Ads
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide all advertisements at ComicVine
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
			wmRemoveAll(".mapped-ad");
			wmRemove(".js-taboola-module");
		},
		false
	);
})();
