webpackJsonp_name_([0],{

/***/ 6:
/***/ (function(module, exports) {

eval("module.exports = function accordion(e) {\n    'use strict';\n    // start my accordion\n\n    var elem = $(e.target);\n    var panel = $('.panel');\n    var elemParent = elem.parent();\n\n    if (panel.find('.accordion-panel-focus').length != 0 && (elem[0].className == 'accordion-panel' || elem[0].className == 'accordion-plus')) {\n        panel.find('.accordion-panel').removeClass('accordion-panel-focus');\n        panel.find('.accordion-plus').removeClass('accordion-plus-focus');\n        panel.find('.panel-focus').removeClass('panel-focus');\n        panel.find('.accordion-text').css('display', 'none');\n        elemParent.find('.accordion-panel').addClass('accordion-panel-focus');\n        elemParent.find('.accordion-plus').addClass('accordion-plus-focus');\n        elemParent.addClass('panel-focus');\n        elemParent.parent().find('.accordion-text').fadeIn(700);\n        return;\n    };\n    if (panel.find('.accordion-panel-focus').length == 0) {\n        elemParent.find('.accordion-panel').addClass('accordion-panel-focus');\n        elemParent.find('.accordion-plus').addClass('accordion-plus-focus');\n        elemParent.addClass('panel-focus');\n        elemParent.parent().find('.accordion-text').fadeIn(700);\n        return;\n    };\n    if (panel.find('.accordion-panel-focus').length != 0) {\n        panel.find('.accordion-panel').removeClass('accordion-panel-focus');\n        panel.find('.accordion-plus').removeClass('accordion-plus-focus');\n        panel.find('.panel-focus').removeClass('panel-focus');\n        panel.find('.accordion-text').css('display', 'none');\n        return;\n    };\n    // end my accordion\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./js/no_routes/accordion.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./js/no_routes/accordion.js?");

/***/ })

});