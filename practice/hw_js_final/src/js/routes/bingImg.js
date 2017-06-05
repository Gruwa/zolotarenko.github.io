module.exports = function bingImg() {

    let template = require('./template');

    $(function() {
        'use strict';

        if (NODE_ENV === 'development') {
            debugger
        }

        let $value = randWDclassic(1);

        function randWDclassic(n) {
            let s ='';
            let abd ='abcdefghijklmnopqrstuvwxyz';
            let aL = abd.length;
            while(s.length < n)
            s += abd[Math.random() * aL|0];
            return s;
        };

        $.ajax({
            url: 'https://pixabay.com/api/',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                key: '5069177-dbb9700ef5f333933be917c5e',
                q: $value,
                image_type: 'photo',
                callback: 'ServerPhotoCallback',
                per_page: 7,
                category: 'travel',
                min_width: 200
            }
        });

        window.ServerPhotoCallback = function ($data) {

            if (NODE_ENV === 'development') {
                debugger
            }

            let $html = $('#activity--bar-out').html();
            // let $html = templateScript
            let $dataTmpl = {
                $data: $data
            };
            let $SearchContent = template($html, $dataTmpl);

            $('#activity--bar-in').html('');
            $('#activity--bar-in').append($SearchContent);
        }

        $('form').submit(function(event) {

            if (NODE_ENV === 'development') {
                        debugger
            }

            event.preventDefault();
            $value = $('#activity--search').val();
            $.ajax({
                url: 'https://pixabay.com/api/',
                method: 'GET',
                dataType: 'jsonp',
                data: {
                    key: '5069177-dbb9700ef5f333933be917c5e',
                    q: $value,
                    image_type: 'photo',
                    callback: 'ServerPhotoCallback',
                    per_page: 7,
                    category: 'travel',
                    min_width: 200
                }
            });
        });


    });
};