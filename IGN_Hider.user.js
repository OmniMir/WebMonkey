// ==UserScript==
// @name		IGN Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.ign.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Doodle
		wmHide(".doodle");
		//Hide Another Articles
		wmHide(".ign-rush");
		//Hide Ad Player
		wmHide(".infeed-player");
		//Hide Footer
		wmHide("footer");
		//Hide AdBlocker Warning
		wmWaitAndRemove(".fc-ab-root");
		wmWaitAndRemove(".fc-whitelist-root");
		wmAddNewStyle(`
			body{
				overflow: auto !important;
			}
		`);
	}
})();
