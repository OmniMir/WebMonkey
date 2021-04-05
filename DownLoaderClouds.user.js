// ==UserScript==
// @name		DownLoader Clouds
// @namespace	https://vash.omnimir.ru/
// @version		1.0
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://www.dropbox.com/s/*
// @match		https://drive.google.com/file/d/*
// @match		https://drive.google.com/u/0/uc?export=download*
// @match		https://drive.google.com/u/0/uc?id=*export=download
// @match		https://drive.google.com/uc?id=*
// @match		https://cloud.mail.ru/*
// @match		http://www.mediafire.com/*
// @match		https://www.mediafire.com/*
// @match		https://mega.nz/*
// @match		https://onedrive.live.com/*
// @match		https://disk.yandex.com/d/*
// @match		https://disk.yandex.fr/d/*
// @match		https://disk.yandex.kz/d/*
// @match		https://disk.yandex.ru/d/*
// @match		https://disk.yandex.ua/d/*
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
				//OneDrive
				wmClick(".od-Button");
				//YandexDisk
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
					//Open Page with download link
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
