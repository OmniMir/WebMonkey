// ==UserScript==
// @name		PWNews Video
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Get HD Video at PWNews&SportBox
// @author		kapsilon
// @license		MIT
// @match		https://pwnews.net/blog/*
// @match		https://pwnews.net/_uplvid/*
// @match		https://news.sportbox.ru/vdl/poster/*
// @match		https://news.sportbox.ru/Vidy_sporta/edinoborstva/*
// @exclude		https://news.sportbox.ru/Vidy_sporta/edinoborstva/*?ci=*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => AutoPlayer(), false);

	function AutoPlayer() {
		//Get Latest Video
		wmClick(".example3 a");
		//Click Video
		wmClick("#VdlContentWrap");

		//Dive in iFrame Player
		if (document.querySelector("iframe")) {
			let playerFrame = document.querySelector("iframe").contentWindow.document.body;
			if (playerFrame.querySelector("div a#wsw1")) {
				playerFrame.querySelector("div a#wsw1").click();

				//Dive in Second iFrame (with Cross Origin)
				let playerLink = playerFrame.querySelector("iframe").src;
				window.open(playerLink, "_self");
			}

			//Set HD Quality
			playerFrame.querySelector("#device-player-button").click();
			playerFrame.querySelector("div a.hd").click();
		}

		//Close Opened Tabs
		wmWaitAndCloseTab();
	}
})();
