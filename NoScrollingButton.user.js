// ==UserScript==
// @name		NoScrollingButton
// @namespace	https://vash.omnimir.ru/
// @version		1.1
// @description	Disable Smooth Scroll by Middle Mouse Button
// @author		kapsilon
// @license		MIT
// @match		http://*/*
// @match		https://*/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start with Middle click
	window.addEventListener("mousedown", (mouseEvent) => NoScrollingButton(mouseEvent), false);

	//ScrollingButton Switch Off
	function NoScrollingButton(mouseEvent) {
		if (mouseEvent.button == 1) {
			mouseEvent.preventDefault();
			mouseEvent.stopPropagation();
		}
	}
})();
