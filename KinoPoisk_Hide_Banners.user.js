// ==UserScript==
// @name		KinoPoisk Hide Banners
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide Big Banners
// @author		kapsilon
// @license		MIT
// @match		https://www.kinopoisk.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//After filmcard banner
			wmRemove("div[data-metrika=film_card] + *");
			wmRemove("div[class^=view_people__]");
			//Right side banner
			wmRemove("div[data-type=teaserspec] + *");
			wmRemove(".inviteFriends + *");
			//Hovering corner banner
			wmRemove(".promo.banner__area");
			//Top banner
			wmWaitAndRemove("div[style='min-height: 0px;']");
			wmWaitWaitAndRemove("div[style='min-height: 0px;']");
		},
		false
	);
})();
