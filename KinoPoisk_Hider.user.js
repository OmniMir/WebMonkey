// ==UserScript==
// @name		KinoPoisk Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.9
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
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//FOR NEW DESIGN
		//Hide Streaming Theater
		wmHide(".kinopoisk-header-featured-menu");
		wmHide(".hd-nameplate");
		wmHide(".watch-online-button");
		wmHide("div[class^=styles_watchOnlineDescription]");
		wmHide("div[class^=styles_watchOnlineDescription] + div");
		wmHideAll("a[class^=styles_nameplate]");
		wmHideAllInStyle("a[class*=styles_rootPlus]");
		wmHideAll("a[class*=styles_rootGhost]");
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
		wmHide("div[class*=styles_branding]");
		wmAddNewStyle(`
				div[class*=styles_navigationWithBranding] {
					margin-top: 0px;
				}
			`);
		//Hide Add to Collection
		wmHide("button[class^=styles_toWatchButton]");
		wmHide("div[class^=styles_userControlsContainer]");
		wmHide("a[class^=styles_soundtrackButton");
		//Hide Copyright on Poster
		wmHide("img[class^=styles_copyrightImg");
		//Hide Social buttons
		wmHide("div[class^=styles_foldersMenu]");
		wmHide("button[class^=styles_heartButton]");
		wmHide("div[class^=styles_foldersList]");
		wmHide("#film-share-buttons");
		wmHide("#film-share-buttons + div");
		wmHide("#person-share-buttons");
		wmHide("button[class^=styles_buttonError]");
		wmHide("button[class^=styles_buttonInfo]");
		wmHide("div[class^=styles_kinopoiskRatingSnippet]");
		wmHide("div[class^=styles_filmRatingSection]");
		//Hide IMAX icon
		wmHide("span[class^=styles_imaxContainer]");
		//Hide Ads
		wmHideAll("div[class*=styles_rootRendered]");
		wmHide("a[href^='/afisha/new/film/']");
		//Hide Recommended movies
		wmWaitAndHide(".similar-films-block");
		wmWaitAndHide("a[href='/afisha/new/city'");
		wmHideAllInStyle("section div[class*=styles_carouselWithPermanentButtons]");
		//Hide Trailers (go to Trailers Page)
		wmWaitAndHide(".film-trailers-block");
		//Hide Movie Lists
		wmHide(".styles_root__V9fG5");
		//Hide AdBlock Warning
		wmWaitAndHide("div[class^=adblock-warning");
		wmWaitAndHide("div[class^=styles_adBlockWarning");
		//Hide Footer
		wmHide("div[class^=styles_footerContainer_]");
		//Hide AdBlock Warning
		wmHide("div[class^=styles_adBlockWarning]");

		//FOR OLD DESIGN
		//Hide Streaming Theater
		wmRemove("._2lIaVuplclqoEPxCO_yWsY._3tmz2UPcIDTjaP7bG35GSc");
		wmRemove(".movie-info__button-container");
		//Hide Top banner
		wmWaitAndRemove("div[style='min-height: 0px;']");
		wmWaitWaitAndRemove("div[style='min-height: 0px;']");
		wmAddNewStyle(`
				._3CpeWr3-38xpWEr29rPP4h {
					margin-top: 0px;
				}
			`);
		//Hide Add to Collection
		wmRemove(".addFolder");
		wmRemove("#div_mustsee_main");
		wmRemove(".film-img-box__soundtrack");
		wmRemove(".to_friend");
		wmRemoveAll(".MyKP_Folder_Select");
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
		wmRemove(".no_padds div");
		//Hide Subscribe feature
		wmRemove(".subscribe");
		//Hide Hovering corner banner
		wmRemove(".promo.banner__area");
		//Hide Movie Ads
		wmRemove("#partial_component__watch-online-person-slider");
		//Hide Annoying RandomMovie
		wmHide(".randomMovie");
		//Hide AdBlock Warning
		wmHide("#partial_component__header-topline");
		//Hide Footer
		wmHide("#partial_component__footer");
		wmHide("#footer_wrapper");
	}
})();
