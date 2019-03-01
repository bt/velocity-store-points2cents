// ==UserScript==
// @name         Velocity Store - Points to Cents
// @namespace    https://velocityfrequentflyer.com/
// @version      1.0
// @description  Convert Velocity Point values to Australian Dollars
// @author       Bertram Truong <b@bertramtruong.com>
// @match        https://shop.velocityfrequentflyer.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var value = 0.014; // cents

    var price = document.querySelectorAll('.price');
    price.forEach(function(element) {
        var val = element.innerHTML.match(/[\d|,]+ [P|p]oints/gm);
        if (val != null) {
            val = val[0].replace(/,/gi, '');
            var valInt = parseInt(val);
            var cents = value * valInt;
            element.innerHTML = element.innerHTML.replace(/[P|p]oints/gm, '($' + cents.toFixed(2).toLocaleString('en-AU') + ') Points');
        }
    });
})();