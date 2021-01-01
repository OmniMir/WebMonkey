// ==UserScript==
// @name		Shazam Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.shazam.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Apple Music Ads
		wmHide(".shz-frame-applemusic-connection");
		wmHideAllInStyle(".ampill");
		//Hide Footer
		wmHide(".footer");
	}
})();
