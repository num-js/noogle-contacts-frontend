/*
 * Filename:  cookieHelper.js
 * Created Date: Friday, April 8th 2022, 4:59:14 pm
 * Author: Numan Ahmed
 * Description: Set Cookie value & get Cookie value
 * Developed with ❤️
 * Copyright (c) Numan
 */


/**
 * Set Cookie Value
 * @param {String} name - name of the Cookie
 * @param {String} value - value of the Cookie
 * @param {String} days - Expiry date
 */
export const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "");
}

/**
 * Get Cookie Value.
 * @param {cookie_name} string - Cookie name
 * @return {string} string - Cookie value
*/
export const getCookie = (cookie_name) => {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}