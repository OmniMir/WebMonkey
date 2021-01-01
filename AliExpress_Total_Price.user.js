// ==UserScript==
// @name		AliExpress Total Price
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Calculate Price with Shipping
// @author		kapsilon
// @license		MIT
// @match		https://aliexpress.com/item/*
// @match		https://aliexpress.ru/item/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => totalPriceDiv(), false);

	//Total Price Calculation
	function totalPrice() {
		//Get Shipping Price
		let shippingPrice = document.querySelector(".product-shipping-price span").innerHTML; //"Доставка: 83,93 руб.&nbsp;"
		shippingPrice = shippingPrice.replace("&nbsp;", ""); //"Доставка: 83,93 руб."
		shippingPrice = shippingPrice.split(" ")[1]; //"83,93"
		shippingPrice = shippingPrice.replace(",", "."); //"83.93"
		shippingPrice = parseFloat(shippingPrice); //83.93

		//Get Product Price
		let productPrice = document.querySelector(".product-price-value").innerHTML; //"62,76 руб."
		productPrice = productPrice.replace("&nbsp;", "");
		let productPriceSplit = productPrice.split(" ");
		let currency = " ";

		//Get Basic Price
		let productPriceS = "";
		if (productPriceSplit.length == 2) {
			currency += productPrice.split(" ")[1]; // " руб."
		}
		productPriceS = productPrice.split(" ")[0]; //"62,76"
		productPriceS = productPriceS.replace(",", "."); //"62.76"
		productPriceS = parseFloat(productPriceS); //62.76
		productPriceS = productPriceS + shippingPrice; //146.69
		productPriceS = productPriceS.toFixed(2); // 146.69 not 146.6898848448

		//Get Second Price
		let productPriceXL = "";
		if (productPriceSplit.length == 4) {
			currency += productPrice.split(" ")[3]; // " руб."
			productPriceXL = productPrice.split(" ")[2]; //"562,76"
			productPriceXL = productPriceXL.replace(",", "."); //"562.76"
			productPriceXL = productPriceXL.replace("&nbsp;", "");
			productPriceXL = parseFloat(productPriceXL); //562.76
			productPriceXL = productPriceXL + shippingPrice; //646.69
			productPriceXL = productPriceXL.toFixed(2); // 646.69 not 646.6898848448
			productPriceXL = " - " + productPriceXL; // " - 646.69"
		}

		//Total Price
		return productPriceS + productPriceXL + currency;
	}
	//Total Price View
	function totalPriceDiv() {
		//Calculate Total Price
		let priceTag = totalPrice();
		if (priceTag.substring(0, 3) != "NaN") {
			//Create Total Price Tag
			let price = document.createElement("div");
			price.className = "product-price-current";
			price.innerHTML = priceTag;
			//Some Design
			price.style.backgroundColor = "red";
			price.style.color = "white";
			//Set Total Price Tag
			document.querySelector(".product-price").appendChild(price);
		}
	}
})();
