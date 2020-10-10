// ==UserScript==
// @name		Instagram Hide Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.8
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
			wmAddNewStyle(`
				.ext_tooltip, .ext_stories_page_icon, .ext_mobile_mode_icon, .download_all_wrap_wrap {
					display: none;
				}
			`);
			//Move Upload Button
			let newUploadButton = document.querySelector(".upload_btn_wrap")
			document.querySelector("header section div").appendChild(newUploadButton)
			//Hide Download and Delete Buttons
			wmAddNewStyle(`
				.ext_desktop_dl_btnn, .ext_del_btn, .ext_icon, .ext_text {
					display: none;
				}
			`);
		},
		false
	);
})();
