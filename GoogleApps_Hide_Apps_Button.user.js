// ==UserScript==
// @name		GoogleApps Hide Apps Button
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Hide button to various google apps
// @author		kapsilon
// @license		MIT
// @match		https://drive.google.com/drive/*
// @match		https://mail.google.com/mail/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide(".gb_Sc");
		},
		false
	);
})();
