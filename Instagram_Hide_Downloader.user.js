// ==UserScript==
// @name		Instagram Hide Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide Annoying Things from Downloader for Instagram Extension
// @author		kapsilon
// @license		MIT
// @match		https://www.instagram.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmRemove(".ext_tooltip");
			wmRemove(".ext_stories_page_icon");
			wmRemove(".ext_mobile_mode_icon");
			setTimeout(() => {
				wmRemove(".download_all_wrap_wrap");
				hideExtensionButtons();
			}, 2000);
		},
		false
	);
	//Going with page scroll
	window.addEventListener("scroll", hideExtensionButtons, false);
	//Hide all Download and Delete buttons
	function hideExtensionButtons() {
		wmRemoveAll(".ext_desktop_dl_btnn");
		wmRemoveAll(".ext_del_btn");
		wmRemove(".download_all_wrap_wrap");
	}
})();
