// ==UserScript==
// @name		Instagram Hide Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.9
// @description	Hide annoying elements from Downloader for Instagram Extension
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
			wmHideAllInStyle(".imdr_top_nav_btn");
			//Hide Prompt for Upload Button
			wmHideAllInStyle(".tippy-popper");
			//Hide Download and Delete Buttons
			wmHideAllInStyle(".ext_desktop_dl_btnn");
			wmHideAllInStyle(".ext_del_btn");
			wmHideAllInStyle(".ext_icon");
			wmHideAllInStyle(".ext_text");
		},
		false
	);
})();
