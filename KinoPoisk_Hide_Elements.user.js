// ==UserScript==
// @name		KinoPoisk Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.7
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
			wmRemove("._2lIaVuplclqoEPxCO_yWsY._3tmz2UPcIDTjaP7bG35GSc");
			wmRemove(".movie-info__button-container");
			//Hide Top banner
			wmWaitAndRemove("div[style='min-height: 0px;']");
			wmWaitWaitAndRemove("div[style='min-height: 0px;']");
			//Hide Add to Collection
			wmRemove(".addFolder");
			wmRemove("#div_mustsee_main");
			wmRemove(".film-img-box__soundtrack");
			wmRemove(".to_friend");
			//Hide IMAX icon
			wmRemove(".imax-item");
			//Hide After filmcard banner
			wmRemove("div[data-metrika=film_card] + *");
			wmRemove("div[class^=view_people__]");
			//Hide Social buttons
			wmRemove(".block_social");
			wmRemove(".new-share-buttons");
			//Hide Recommended movies
			wmRemove("#film_recom");
			//Hide Right side banner
			wmRemove("div[data-type=teaserspec] + *");
			wmRemove(".inviteFriends + *");
			//Hide Subscribe feature
			wmRemove(".subscribe");
			//Hide Hovering corner banner
			wmRemove(".promo.banner__area");
			//Hide Movie Ads
			wmRemove("#partial_component__watch-online-person-slider");
			//Hide Annoying RandomMovie
			wmHide(".randomMovie");
			//Hide Footer
			wmHide("#partial_component__footer");
			wmHide("#footer_wrapper");
		},
		false
	);
})();
