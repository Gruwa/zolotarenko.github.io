webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function activityScript() {\n\n    var template = __webpack_require__(9);\n    var imagesloaded = __webpack_require__(19);\n    var masonry = __webpack_require__(21);\n    var imagefill = __webpack_require__(20);\n\n    var $value = randWDclassic(1);\n\n    function randWDclassic(n) {\n        var s = '';\n        var abd = 'abcdefghijklmnopqrstuvwxyz1234567890йцукенгшщзхфывапролджэячсмитбю';\n        var aL = abd.length;\n        while (s.length < n) {\n            s += abd[Math.random() * aL | 0];\n        }return s;\n    };\n\n    window.ServerPhotoCallback = function ($data) {\n        // if (NODE_ENV === 'development') {\n        //     debugger\n        // }\n\n        var $html = $('#activity--bar-out').html();\n        var $dataTmpl = {\n            $data: $data\n        };\n        var $SearchContent = $(template($html, $dataTmpl));\n\n        $('#activity--bar-in').html($SearchContent);\n\n        insertImages();\n    };\n\n    function getPhotos(value) {\n        $.ajax({\n            url: 'https://pixabay.com/api/',\n            method: 'GET',\n            dataType: 'jsonp',\n            data: {\n                key: '5069177-dbb9700ef5f333933be917c5e',\n                q: value,\n                image_type: 'photo',\n                callback: 'ServerPhotoCallback',\n                per_page: 7,\n                category: 'travel',\n                min_width: 200\n            }\n        });\n    }\n\n    function insertImages() {\n        var $grid = $('#activity--bar-in');\n        $grid.imagesLoaded(function () {\n            // init Masonry after all images have loaded\n            console.log('imagesLoaded');\n            $grid.masonry({\n                itemSelector: '.grid-item'\n            });\n            // $('#activity--bar-in').masonry('layout');\n            // $('.grid-item').imagefill();\n        });\n    }\n\n    $(function () {\n        'use strict';\n\n        // if (NODE_ENV === 'development') {\n        //     debugger\n        // }\n\n\n        getPhotos($value);\n\n        $('form').submit(function (event) {\n            // if (NODE_ENV === 'development') {\n            //             debugger\n            // }\n            event.preventDefault();\n            $value = $('#activity--search').val();\n            getPhotos($value);\n            $('#activity--search').val('');\n        });\n    });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./js/routes/activityScript.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./js/routes/activityScript.js?");

/***/ })

})