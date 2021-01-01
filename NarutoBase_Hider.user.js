// ==UserScript==
// @name		NarutoBase Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://naruto-base.su/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Left Banner
		wmHide("a[href='/go?https://vk.com/narutobase_ru']");
		//Hide Top&Right Banners
		wmHideAll(".content_rb");

	}
})();
