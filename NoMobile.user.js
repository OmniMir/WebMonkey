// ==UserScript==
// @name		TEST NoMobile
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Leaving mobile version
// @author		kapsilon
// @license		MIT
// @match		https://m.comixology.com/*
// @match		https://*.m.wikipedia.org/*
// @match		https://*.m.wiktionary.org/*
// @grant		none
// @run-at		document-start
// ==/UserScript==

(function () {
	"use strict";
	//Leaving .m-sites in past
	let currentURL = document.URL;
	currentURL = currentURL.replace("//m.", "//");
	currentURL = currentURL.replace(".m.", ".");
	//Open URL in Same Tab
	window.open(currentURL, "_self");
})();
