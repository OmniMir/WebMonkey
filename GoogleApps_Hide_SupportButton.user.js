// ==UserScript==
// @name		GoogleApps Hide Support Button
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide button to support
// @author		kapsilon
// @license		MIT
// @match		https://drive.google.com/drive/*
// @match		https://mail.google.com/mail/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide(".gb_Be");
			wmHide(".gb_Ee");
			wmHide(".zo");
		},
		false
	);
})();