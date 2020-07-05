// ==UserScript==
// @name		Auto Closer
// @namespace	https://vash.omnimir.ru/
// @version		1.0
// @description	Close annoying useless auto-opened web-pages
// @author		kapsilon
// @license		MIT
// @match		http://playinfo.gomlab.com/ending_browser.gom?product=GOMPLAYER
// @match		https://www.kcsoftwares.com/?page=postinstall&sw=SUMo
// @match		https://vash.omnimir.ru/tabautoclose/
// @grant		window.close
// @run-at		document-start
// ==/UserScript==

(function () {
	"use strict";
	//@run-at used for acceleration
	//That just works (only with @grant)
	window.close();
})();
