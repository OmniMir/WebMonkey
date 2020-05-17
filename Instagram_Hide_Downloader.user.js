// ==UserScript==
// @name		Instagram Hide Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide Annoying Things from Downloader for Instagram Extension
// @author		kapsilon
// @license		MIT
// @match		https://www.instagram.com/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			document.querySelector(".ext_tooltip").remove();
			document.querySelector(".ext_stories_page_icon").remove();
			document.querySelector(".ext_mobile_mode_icon").remove();
			setTimeout(() => {
				document.querySelector(".download_all_wrap_wrap").remove();
                hideExtensionButtons();
			}, 2000);
		},
		false
	);
	//Going with page scroll
	window.addEventListener("scroll", hideExtensionButtons, false);
	//Hide all Download and Delete buttons
	function hideExtensionButtons() {
		document.querySelectorAll(".ext_desktop_dl_btnn").forEach((element) => {
			element.remove();
		});
		document.querySelectorAll(".ext_del_btn").forEach((element) => {
			element.remove();
		});
		if (document.querySelector(".download_all_wrap_wrap")) {
		document.querySelector(".download_all_wrap_wrap").remove();
		}
	}
})();
