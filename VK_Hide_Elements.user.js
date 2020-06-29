// ==UserScript==
// @name		VK Hide Ads
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Hide some advertisements on VK
// @author		kapsilon
// @license		MIT
// @match		https://vk.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Remove Top Audio Player
			wmHide("#top_audio_layer_place");
			wmHide("#top_audio_btn_group");
			//Remove ads from left menu
			wmRemove("#ads_left");
			//Remove ads from feed
			wmRemove(".ads_ad_box");
		},
		false
	);
	//Remove ads from feed with scrolling
	window.addEventListener(
		"scroll",
		function () {
			wmRemove(".ads_ad_box");
		},
		false
	);
})();
