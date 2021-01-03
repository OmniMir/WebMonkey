// ==UserScript==
// @name		UCozSites Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @match		http://*.ucoz.com/*
// @match		http://*.ucoz.net/*
// @match		http://*.ucoz.org/*
// @match		http://*.ucoz.ru/*
// @match		http://*.3dn.ru/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide fake notification from all uCoz sites
		wmHide(".pshsndr");
	}
})();
