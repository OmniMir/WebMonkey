// ==UserScript==
// @name		EpGuides HotKey Control
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press W to Wikipedia
// @author		kapsilon
// @match		http://epguides.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press W to Wikipedia
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "KeyW") {
				wmClick(".Wiki a");
			}
		},
		false
	);

})();
