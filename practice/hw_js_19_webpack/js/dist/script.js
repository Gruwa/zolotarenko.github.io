var script =
webpackJsonp_name_([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n// Подключение всех нужный скрипт файлов\n\nvar _interopRequireDefault = __webpack_require__(3)['default'];\n\nvar _myscript = __webpack_require__(5);\n\nvar _myscript2 = _interopRequireDefault(_myscript);\n\n// в формате ES2015\n// var welcome3 = require('./template'); // в формате старом\n\n// для доступа ко всем переменным в файлах\nexports.welcome = _myscript2['default'];\n// exports.welcome3 = welcome3;\n\n//////////////////\n// WEBPACK FOOTER\n// ./script.js\n// module id = 0\n// module chunks = 2\n//# sourceURL=webpack:///./script.js?");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nmodule.exports = __webpack_require__(4);\n\n//////////////////\n// WEBPACK FOOTER\n// C:/Users/Al/work_git/gruwa.github.io/practice/hw_js_19_webpack/~/babel-runtime/helpers/interop-require-default.js\n// module id = 3\n// module chunks = 2\n//# sourceURL=webpack:///C:/Users/Al/work_git/gruwa.github.io/practice/hw_js_19_webpack/~/babel-runtime/helpers/interop-require-default.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\n\nexports[\"default\"] = function (obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// C:/Users/Al/work_git/gruwa.github.io/practice/hw_js_19_webpack/~/babel-runtime/helpers/interopRequireDefault.js\n// module id = 4\n// module chunks = 2\n//# sourceURL=webpack:///C:/Users/Al/work_git/gruwa.github.io/practice/hw_js_19_webpack/~/babel-runtime/helpers/interopRequireDefault.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n$(function () {\n    'use strict';\n    $('.bxslider').bxSlider();\n    //Server start\n    var $ServerData = {\n        id: 100,\n        data: [{\n            id: 101,\n            title: \"Advanced Machinery Helps Improve Quality\",\n            month: 'Jan',\n            day: 23,\n            imageSrc: 'img/news1.jpg',\n            author: 'cmsmasters',\n            coments: 6,\n            text: \"Cum sociis natoque penatibus et magnis dis parturient ontesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.\"\n        }, {\n            id: 102,\n            title: \"Powerful Techniques for Advanced Service\",\n            month: 'Jan',\n            day: 21,\n            imageSrc: 'img/news2.jpg',\n            author: 'cmsmasters',\n            coments: 3,\n            text: \"Cum sociis natoque penatibus et magnis dis parturient ontesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.\"\n        }]\n    };\n    var $Server = JSON.stringify($ServerData);\n    //Server end\n    var $jsData = JSON.parse($Server);\n    var $html = $('#latestNews').html();\n    var $dataTmpl = {\n        $data: $jsData\n    };\n    //\n    //\n    debugger;\n    if (true) {\n        console.log($dataTmpl);\n    };\n    //\n    //\n    var $content = tmpl($html, $dataTmpl);\n    $('#latestNewsIn').html('');\n    $('#latestNewsIn').append($content);\n    //banner-box\n    $('.accordion').on('click', '.accordion-panel, .accordion-plus', function (e) {\n        var elem = $(e.target);\n        Element();\n        function Element() {\n            debugger;\n            if ($('.panel').find('.accordion-panel-focus').length != 0 && (elem[0].className == 'accordion-panel' || elem[0].className == 'accordion-plus')) {\n                $('.panel').find('.accordion-panel').removeClass('accordion-panel-focus');\n                $('.panel').find('.accordion-plus').removeClass('accordion-plus-focus');\n                $('.panel').find('.panel-focus').removeClass('panel-focus');\n                $('.panel').find('.accordion-text').css('display', 'none');\n                $(e.target).parent().find('.accordion-panel').addClass('accordion-panel-focus');\n                $(e.target).parent().find('.accordion-plus').addClass('accordion-plus-focus');\n                $(e.target).parent().addClass('panel-focus');\n                $(e.target).parent().parent().find('.accordion-text').fadeIn(700);\n                return;\n            };\n            if ($('.panel').find('.accordion-panel-focus').length == 0) {\n                $(e.target).parent().find('.accordion-panel').addClass('accordion-panel-focus');\n                $(e.target).parent().find('.accordion-plus').addClass('accordion-plus-focus');\n                $(e.target).parent().addClass('panel-focus');\n                $(e.target).parent().parent().find('.accordion-text').fadeIn(700);\n                return;\n            };\n            if ($('.panel').find('.accordion-panel-focus').length != 0) {\n                $('.panel').find('.accordion-panel').removeClass('accordion-panel-focus');\n                $('.panel').find('.accordion-plus').removeClass('accordion-plus-focus');\n                $('.panel').find('.panel-focus').removeClass('panel-focus');\n                $('.panel').find('.accordion-text').css('display', 'none');\n                return;\n            };\n        }\n    });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./myscript.js\n// module id = 5\n// module chunks = 2\n//# sourceURL=webpack:///./myscript.js?");

/***/ })
]);