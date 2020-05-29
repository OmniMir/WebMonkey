// ==UserScript==
// @name		No Scrolling Button
// @namespace	https://vash.omnimir.ru/
// @version		1.0
// @description	Disable Smooth Scroll by Middle Mouse Button
// @author		kapsilon
// @license		MIT
// @match		http://*/*
// @match		https://*/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	window.addEventListener(
		"mousedown",
		function (mouseEvent) {
			if (mouseEvent.button == 1) {
				mouseEvent.preventDefault();
				mouseEvent.stopPropagation();
			}
		},
		true
	);
})();
