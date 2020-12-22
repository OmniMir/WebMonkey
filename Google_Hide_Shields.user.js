// ==UserScript==
// @name		Google Hide Shields
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.google.com/search*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide green Kaspersky Protection Extension shields from Google Search
	function hideElements() {
		//Waiting to Kapsersky Protection Extension
		setTimeout(() => {
			//Search special image by name and hide all of them
			wmHideAllInStyle("h3 + img");
			wmHideAllInStyle("h3 > img");
		}, 2000);
	}
})();
