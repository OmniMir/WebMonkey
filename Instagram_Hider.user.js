// ==UserScript==
// @name		Instagram Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide Annoying Elements
// @author		kapsilon
// @license		MIT
// @match		https://www.instagram.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide New Posts Notification
		wmWaitWaitAndRemove("._7EEvc");
	}

	//Hide annoying red dot
	//via CSS because pseudo selectors are NOT just selected
	wmHideAllInStyle(".q9xVd::after");
})();
