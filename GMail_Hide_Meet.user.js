// ==UserScript==
// @name		GMail Hide Meet
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Disable New Google Meet Section in left sidebar (something as old Google Chat in GMail)
// @author		kapsilon
// @license		MIT
// @match		https://mail.google.com/mail/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmRemove(".aeO");
			wmRemove(".akc.aZ6.YX");
		},
		false
	);
})();
