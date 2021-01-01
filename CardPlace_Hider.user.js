// ==UserScript==
// @name		CardPlace Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.cardplace.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Currency
		wmHide("#currency_block");
		//Hide Yandex
		wmHideAll("noindex");
		//Hide Chat
		wmHide(".w-support");
		//Hide Video Stream
		wmRemove("div[id='widget.stream']");
		//Hide Footer
		wmHide("#main-footer");
	}
})();
