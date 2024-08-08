#!/usr/bin/node

$(document).ready(function() {
    function fetchHello() {
        const langCode = $('#language_code').val();
        if (langCode) {
            $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`, function(data) {
                $('#hello').text(data.hello);
            }).fail(function() {
                $('#hello').text('Error: Unable to fetch translation');
            });
        } else {
            $('#hello').text('Please enter a language code');
        }
    }

    $('#btn_translate').click(fetchHello);

    $('#language_code').keypress(function(event) {
        if (event.which === 13) { // 13 is the Enter key
            fetchHello();
        }
    });
});

