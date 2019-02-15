function preloader() {
    if ($('#loading').length) {
        setTimeout(function() {
            $('#loading').fadeOut('slow', function() {
                $('#loading').css('diplay', 'none');
            });
        }, 300);
    }
}
$(window).on('load', preloader);