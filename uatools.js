﻿var UATOOLS;

(function (UATOOLS) {
    var currentUA = navigator.userAgent || "";

    var currentLowerUA = currentUA.toLowerCase();

    // Features
    UATOOLS.IsMobile = function() {
        return currentLowerUA.indexOf("mobile") >= 0;
    }

    UATOOLS.GetUserAgentString = function () {
        return currentUA;
    }

    UATOOLS.GetOperatingSystem = function() {
        // Windows Phone
        if (currentLowerUA.indexOf("windows phone") >= 0) {
            return "Windows Phone";
        }

        // Windows
        if (currentLowerUA.indexOf("windows") >= 0) {
            return "Windows";
        }

        // Android
        if (currentLowerUA.indexOf("android") >= 0) {
            return "Android";
        }

        // iOS
        if (currentLowerUA.indexOf("apple-i") >= 0) {
            return "iOS";
        }

        // BlackBerry
        if (currentLowerUA.indexOf("blackberry") >= 0) {
            return "BlackBerry";
        }

        // BlackBerry
        if (currentLowerUA.indexOf("kindle") >= 0) {
            return "Kindle";
        }

        // Macintosh
        if (currentLowerUA.indexOf("macintosh") >= 0) {
            return "Macintosh";
        }

        // Linux
        if (currentLowerUA.indexOf("linux") >= 0) {
            return "Linux";
        }

        // OpenBSD
        if (currentLowerUA.indexOf("openbsd") >= 0) {
            return "OpenBSD";
        }
    }
})(UATOOLS || (UATOOLS = {}));