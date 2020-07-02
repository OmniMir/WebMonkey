// ==UserScript==
// @name		VK Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Hide annoying elements
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
			//Remove Ads from Left Menu
			wmRemove("#ads_left");
			//Remove Ads from FeedL
			wmRemove(".ads_ad_box");
		},
		false
	);
	//Remove Ads from Feed with scrolling
	window.addEventListener(
		"scroll",
		function () {
			wmRemove(".ads_ad_box");
		},
		false
	);
})();
