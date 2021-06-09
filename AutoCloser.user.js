// ==UserScript==
// @name		AutoCloser
// @namespace	https://vash.omnimir.ru/
// @version		1.1
// @description	Close annoying useless auto-opened web-pages
// @author		kapsilon
// @license		MIT
// @match		http://playinfo.gomlab.com/ending_browser.gom?product=GOMPLAYER
// @match		http://www.gomtv.com/gomtvplus/
// @match		https://www.kcsoftwares.com/?page=postinstall&sw=*
// @match		http://track.wg-aff.com/disabled.html
// @match		https://vash.omnimir.ru/tabautoclose/
// @grant		window.close
// @run-at		document-start
// ==/UserScript==

(function () {
	"use strict";
	//@run-at used for acceleration
	//That just works (only with @grant)
	window.close();

	//Reload if not closed
	setTimeout(() => {
		location.reload()
	}, 1000);
})();
