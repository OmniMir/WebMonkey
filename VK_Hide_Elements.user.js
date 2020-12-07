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
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Top Audio Player
		wmHide("#top_audio_layer_place");
		wmHide("#top_audio_btn_group");
		//Hide Ads from Left Menu
		wmRemove("#ads_left");
		//Hide mini footer
		wmHide(".left_menu_nav_wrap");
		//Hide Ads from Feed
		wmRemove(".ads_ad_box");
		//Hide Friends&Chat Tab
		wmRemove("#chat_onl_wrap");
	}

	//Hide Ads from Feed with scrolling
	window.addEventListener(
		"scroll",
		function () {
			wmRemove(".ads_ad_box");
		},
		false
	);
})();
