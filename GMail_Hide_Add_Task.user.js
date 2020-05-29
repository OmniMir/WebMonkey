// ==UserScript==
// @name		GMail Hide Add Task
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide Annoying Add Task Button from toolbar
// @author		kapsilon
// @license		MIT
// @match		https://mail.google.com/mail/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmRemove(".VJ");
		},
		false
	);
	//Restart with changing of label&etc
	window.onhashchange = function () {
		//This function only for changes after '#' in URL, not for full URL change
		wmRemove(".VJ");
	};
})();
