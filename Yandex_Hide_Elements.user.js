// ==UserScript==
// @name		Yandex Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://yandex.ru/*
// @match		https://*.yandex.ru/*
// @match		https://yadi.sk/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Promos
			wmHide(".money-app-promo2");
			wmHide(".offerwall-banner");
			wmHide(".app-promo-banner");
			wmHide(".b2b-banner");
			//Hide Advertisements
			wmHideAll("div[class*='TY__wrapper']");
			//Hide Footer
			wmHide("footer");
			wmHide(".serp-footer__main");
		},
		false
	);
})();
