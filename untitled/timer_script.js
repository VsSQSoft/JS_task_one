/**
 * Created by Валерий on 24.12.2014.
 */
jQuery(document).ready(function() {
    jQuery(".eTimer").eTimer({
        etType: 0, etDate: "16.01.2015.7.4",
        etTitleText: "До окончания акции осталось:",
        etTitleSize: 21,
        etShowSign: 1,
        etSep: ":",
        etFontFamily: "Trebuchet MS",
        etTextColor: "#a3a3a3",
        etPaddingTB: 8,
        etPaddingLR: 15,
        etBackground: "#333333",
        etBorderSize: 0,
        etBorderRadius: 2,
        etBorderColor: "white",
        etShadow: " 0px 0px 10px 0px #333333",
        etLastUnit: 4,
        etNumberFontFamily: "Impact",
        etNumberSize: 20,
        etNumberColor: "white",
        etNumberPaddingTB: 5,
        etNumberPaddingLR: 8,
        etNumberBackground: "#11abb0",
        etNumberBorderSize: 1,
        etNumberBorderRadius: 5,
        etNumberBorderColor: "white",
        etNumberShadow: "inset 0px 6px 10px 0px rgba(0, 0, 0, 0.5)"
    });
});