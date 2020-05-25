// ==UserScript==
// @name		GoogleApps Hide SidePanel
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Hide button to call right sidebar
// @author		kapsilon
// @license		MIT
// @match		https://docs.google.com/document/*
// @match		https://drive.google.com/drive/*
// @match		https://mail.google.com/mail/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//GMail Side Panel
			wmHide(".brC-dA-I-Jw");
			//Google Drive Side Panel
			wmHide(".Kk7lMc-QWPxkf-d-j");
			//Google Docs Side Panel
			wmHide(".companion-collapser-button-container");
		},
		false
	);
})();
