// ==UserScript==
// @name		PWNews Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://pwnews.net/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Header
		wmHide(".newlogo");
		wmAddNewStyle(`
				.headerer {
					height: 39px;
			}
			`);
		wmAddNewStyle(`
				.inf {
					height: 18px;
			}
			`);
		//Hide News apps
		wmHide(".follows-channel");
		//Hide Last news
		wmHide(".follows-channel + div + p + h4");
		wmHide("td[style='float:right; color:#ffffff; padding-bottom:15px; ']");
		//Hide Best Comment
		wmHide(
			"div[style='align:center; width:97.3%;background-color:#f1f1f1; color:#000000; padding: 5px; font-family: Verdana, sans-serif; margin: 5px 3px 0 5px']"
		);
		wmHide(".bestCom");
		//Hide VK
		wmHide("#vk_groups");
		//Hide Best commentators + Last results
		wmHideAllInStyle(".bigblockrnews");
		//Hide Footer
		wmHide("#content_r + p + hr");
		wmHide("#content_r + p + hr + p + table");
		wmHide("#content_rnews + p + hr");
		wmHide("#content_rnews + p + hr + p + table");
	}
})();
