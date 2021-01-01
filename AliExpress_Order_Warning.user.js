// ==UserScript==
// @name		AliExpress Order Warning
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Less Than 5 Days
// @author		kapsilon
// @license		MIT
// @match		https://trade.aliexpress.com/orderList.htm*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => orderWarning(), false);

	//Order Time Warning on Order List Page
	function orderWarning() {
		//Set 5 Days Warning
		const warningTime = 5 * 24 * 60 * 60 * 1000; // 432,000,000 ms in 5 Days
		// Get All 10-20-30 Orders on List
		for (let i = 0; i < document.querySelectorAll(".left-sendgoods-day").length; i++) {
			//Get One Order
			let leftTimeSelector = document.querySelectorAll(".left-sendgoods-day")[i]; //<p class="left-sendgoods-day" </p>
			//Get Left Time for This Order
			let leftTime = leftTimeSelector.getAttribute("lefttime"); // 5,799,645,229 ms
			//Set Red Waning to Order
			if (leftTime < warningTime) {
				//Some Design
				leftTimeSelector.style.backgroundColor = "red";
				leftTimeSelector.style.color = "white";
			}
		}
	}
})();
