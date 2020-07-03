// ==UserScript==
// @name		Instagram Hide Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.7
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
			//Hide Extension Toolbar
			wmWaitAndRemove(".ext_tooltip");
			wmWaitAndRemove(".ext_stories_page_icon");
			wmWaitAndRemove(".ext_mobile_mode_icon");
			wmWaitAndRemove(".download_all_wrap_wrap");
			//Hide Download and Delete Buttons
			wmRemoveAll(".ext_desktop_dl_btnn");
			wmRemoveAll(".ext_del_btn");
		},
		false
	);
	//Going with page scroll
	window.addEventListener(
		"scroll",
		function () {
			//Hide all Download and Delete Buttons
			wmRemoveAll(".ext_desktop_dl_btnn");
			wmRemoveAll(".ext_del_btn");
			wmRemove(".download_all_wrap_wrap");
		},
		false
	);
})();
