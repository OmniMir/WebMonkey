// ==UserScript==
// @name		Trello Hider
// @namespace	https://vash.omnimir.ru/
// @version		1.0
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//HEADER
		//Hide Other Apps Button (Advertisement)
		wmRemove("button[data-test-id='atlassian-app-switcher']");
		//Hide Home Button (Use Title)
		wmRemove("a[data-test-id='header-home-button']");
		//Hide Boards Button (Use Title => Board)
		wmRemove("button[data-test-id='header-boards-menu-button']");
		//Hide Information Button (Advertisement)
		wmRemove("button[data-test-id='header-info-button']");
		//Hide Information Bar
		wmRemove("div[style='background-color: rgb(23, 43, 77);']");

		//MAIN SCREEN
		//Hide Add Team Button (Use Global Plus)
		wmHideAllInStyle("button[data-test-id='home-navigation-create-team-button']");
		//Hide Business Upgrade Sidebar (Advertisement)
		wmHideAllInStyle(".YbF3JXQH2gXlsC");
		//Hide Stars at Boards
		wmHideAllInStyle(".board-tile-details-sub-container");
		//Hide Tables Buttons
		wmHideAllInStyle(".boards-page-board-section-header-options-item[href$='tables']");
		//Hide Business Upgrade Buttons (Advertisement)
		wmHideAllInStyle("button[data-test-id='team-boards-header-upgrade-button']");
		//Hide Add Board Button (Use Global Plus Button)
		wmHideAllInStyleImportant(".mod-add");

		//BOARD SCREEN
		//Hide Board View Mode Button
		wmHideAllInStyle("button[data-test-id='board-views-switcher-button']");
		//Hide Star Button
		wmHideAllInStyle(".js-star-board");
		//Hide Butler Button (Find Butler in Side Panel)
		wmHideAllInStyle("span.board-header-btn:first-child");
		//Hide Card Template Buttons
		wmHideAllInStyle(".js-card-templates-button");
		wmAddNewStyle(`
			.js-open-card-composer {
				margin-right: 8px
			}
		`);
		//Hide Quick Card Menu Buttons (Use Right Click)
		wmHideAllInStyle(".js-card-menu");
		//Hide Quick Card Menu Open Card Button (Use Left Click)
		wmHideAllInStyle(".quick-card-editor-buttons-item[href^='/c/']");
		//Hide Add List Button (Use Double Click Between Lists)
		wmHideAllInStyle(".mod-add");
		//Hide Add PowerUp Button in Sidebar (Advertisement)
		wmHideAllInStyle(".js-empty-slot-upsell");
		//Hide Upgrade Buttons in Sidebar (Advertisement)
		wmHideAllInStyleImportant(".board-menu-pill-upgrade");

		//CARD SCREEN
		//Hide Add Members/Labels Button (Use Sidebar Menu)
		wmHideAllInStyle(".card-detail-item-add-button");
		//Thinner Titles of Card Blocks (as in Sidebar Menu))
		wmAddNewStyle(`
			h3.u-inline-block,
			.card-detail-activity h3 {
				font-weight: 500;
			}
		`);
		//Hide Edit Description Button (Use Click on Description)
		wmHideAllInStyleImportant(".js-edit-desc-button");
		//Hide Add Attachment Button (Use Sidebar Menu)
		wmHideAllInStyle(".subtle.js-attach");
		wmHideAllInStyle(".js-show-with-attachments");
		wmHideAllInStyleImportant(".js-attach-trello-attachment");
		//Hide Add PowerUp Button (Advertisement)
		wmHideAllInStyle(".js-card-back-pup-prompt");
		wmHideAllInStyle(".js-get-pups");
	}
})();
