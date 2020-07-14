// ==UserScript==
// @name		KinoPoisk Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.kinopoisk.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Streaming Theater
			wmHide(".kinopoisk-header-featured-menu");
			wmHide(".hd-nameplate");
			wmHide(".watch-online-button");
			wmHideAll("a[class^=styles_nameplate]");
			//Hide Top banner
			wmHide("div[class^=styles_themeTopBanner]");
			wmHide("div[class^=styles_background]");
			wmAddNewStyle(`
				.styles_videoContainer__OrZlo {
					margin-top: 0;
				}
				.styles_basicInfoSectionDark__2Jq11 {
					padding-top: 0;
				}
				.styles_basicMediaSectionDark__3jSR- {
					padding-top: 30px;
				}
			`);
			//Hide Add to Collection
			wmHide("button[class^=styles_toWatchButton]");
			wmHide("div[class^=styles_userControlsContainer]");
			wmHide("a[class^=styles_soundtrackButton");
			//Hide Social buttons
			wmHide("#film-share-buttons");
			//Hide IMAX icon
			wmHide("div[class^=styles_imaxContainer]");
			//Hide Ads
			wmHideAll("div[class*=styles_rootRendered]");
			//Hide Recommended movies
			wmHide(".similar-films-block");
			//Hide Trailers (go to Trailers Page)
			wmHide(".film-trailers-block");
			//Hide Movie Lists
			wmHide(".styles_root__V9fG5");
			//Hide Footer
			wmHide("div[class^=styles_footerContainer_]");
		},
		false
	);
})();
