// ==UserScript==
// @name		Clouds HotKey Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://cloud.mail.ru/*
// @match		https://www.dropbox.com/s/*
// @match		https://drive.google.com/file/d/*
// @match		https://drive.google.com/uc?id=*
// @match		http://www.mediafire.com/*
// @match		https://www.mediafire.com/*
// @match		https://mega.nz/*
// @match		https://yadi.sk/d/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				//Disable Default Action
				event.preventDefault();

				//DropBox
				wmClick(".download-button");
				wmClick(".mc-popover-content-item");
				//GoogleDrive
				wmClick("#uc-download-link");
				//MailRu
				wmClick(".b-toolbar__btn_download");
				wmClick(".btn_main");
				//MediaFire
				wmClick(".popsok");
				//Mega
				wmClick(".download-file");
				//YandexDisk
				wmClick(".action-buttons__button_download");
				wmClick(".download-button");

				//And Close Opened Tab
				wmWaitAndCloseTab()
			}
		},
		false
	);
	//GoogleDrive, Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//View mode is blocked🙁 Therefore only automated opening new tab to downloading page
			setTimeout(() => {
				if (
					//Only with "Add to Drive" Button that appear some time later
					document.querySelector(
						".ndfHFb-c4YZDc-Wrql6b-htvI8d-wcotoc-wHEfpf-ndfHFb-Bz112c"
					)
				) {
					let downURL = document.baseURI;
					downURL = downURL
						.replace("file/d/", "u/0/uc?id=")
						.replace("/view", "&export=download");
					window.open(downURL);
				}
			}, 1000);
		},
		false
	);
})();
