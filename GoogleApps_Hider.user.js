// ==UserScript==
// @name		GoogleApps Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.9
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://docs.google.com/document/*
// @match		https://drive.google.com/drive/*
// @match		https://mail.google.com/mail/*
// @match		https://photos.google.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Apps Button
		wmHide(".gb_C");
		//Hide Add Task (GMail)
		wmHideAllInStyle(".VJ");
		//Hide Right Menu Button (GMail)
		wmHide("div[aria-expanded]");
		//Hide Right Menu Tooltips (GMail)
		wmHideAllInStyle("div[role='tooltip']");
		//Hide Side Panel (GMail)
		wmWaitAndHide(".brC-dA-I-Jw");
		//Hide Side Panel (Google Docs)
		wmWaitAndHide(".companion-collapser-button-container");
		//Hide Side Panel (Google Drive)
		wmWaitAndHide(".Kk7lMc-QWPxkf-d-j");
		//Hide Support Button (GMail)
		wmWaitAndHide(".zo");
		//Hide Support Button (Google Drive)
		wmWaitAndHide(".bMWlzf.M1zY4b");
		//Hide Support Button (Google Photos)
		wmWaitAndHide(".eT1oJ.fdwUje");
	}
})();
