// ==UserScript==
// @name		uCoz Sites Hide Notification
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying fake notification from all uCoz sites
// @author		kapsilon
// @match		http://*.ucoz.com/*
// @match		http://*.ucoz.org/*
// @match		http://*.ucoz.ru/*
// @match		http://*.3dn.ru/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide(".pshsndr");
		},
		false
	);
})();
