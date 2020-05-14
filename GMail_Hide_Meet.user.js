// ==UserScript==
// @name		GMail Hide Meet
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Disable New Google Meet Section in left sidebar (something as old Google Chat in GMail)
// @author		kapsilon
// @license		MIT
// @match		https://mail.google.com/mail/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			document.querySelector(".aeO").remove(); //Only remove not hide!!!
			document.querySelector(".akc.aZ6.YX").remove();
		},
		false
	);
})();
