// ==UserScript==
// @name		Trello Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.7
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
	window.addEventListener(
		"load",
		function () {
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
			//Hide Business Upgrade Buttons (Advertisement)
			wmHideAllInStyle("button[data-test-id='team-boards-header-upgrade-button']");
			//Hide Add Board Button (Use Global Plus Button)
			wmAddNewStyle(`
				.mod-add {
					display: none !important;
				}
			`);

			//BOARD SCREEN
			//Hide Board View Mode Button
			wmAddNewStyle(`
				a[data-test-id='board-views-switcher-button'] {
					display: none;
				}
			`);
			//Hide Star Button
			wmAddNewStyle(`
				.js-star-board {
					display: none;
				}
			`);
			//Hide Butler Button (Find Butler in Side Panel)
			wmAddNewStyle(`
				span.board-header-btn:first-child {
					display: none;
				}
			`);
			//Hide Card Template Buttons
			wmAddNewStyle(`
				.js-card-templates-button {
					display: none;
				}
			`);
			wmAddNewStyle(`
				.js-open-card-composer {
					margin-right: 4px
				}
			`);
			//Hide Quick Card Menu Buttons (Use Right Click)
			wmAddNewStyle(`
				.js-card-menu {
					display: none;
				}
			`);
			//Hide Add List Button (Use Double Click Between Lists)
			wmAddNewStyle(`
				.mod-add {
					display: none;
				}
			`);
			//Hide Add PowerUp Button in Sidebar (Advertisement)
			wmAddNewStyle(`
				.js-empty-slot-upsell {
					display: none;
				}
			`);

			//CARD SCREEN
			//Hide Add Members/Labels Button (Use Sidebar Menu)
			wmAddNewStyle(`
				.card-detail-item-add-button {
					display: none;
				}
			`);
			//Hide Add Attachment Button (Use Sidebar Menu)
			wmAddNewStyle(`
				.subtle.js-attach {
					display: none;
				}
			`);
			//Hide Edit Description Button (Click to Description)
			wmAddNewStyle(`
				.js-edit-desc-button {
					display: none;
				}
			`);
			//Hide Add PowerUp Button (Advertisement)
			wmAddNewStyle(`
				.js-card-back-pup-prompt, .js-get-pups {
					display: none;
				}
			`);
		},
		false
	);
})();
