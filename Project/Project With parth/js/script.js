$(document).ready(function() {
    // Tab functionality
    $('.tab-nav li').click(function() {
        var tabId = $(this).data('tab');
        
        $('.tab-nav li').removeClass('active');
        $(this).addClass('active');
        
        $('.tab-pane').removeClass('active');
        $('#' + tabId).addClass('active');
    });

    // Quantity buttons
    $('.minus').click(function() {
        var input = $(this).next('input');
        var value = parseInt(input.val()) - 1;
        if (value >= 1) {
            input.val(value);
        }
    });

    $('.plus').click(function() {
        var input = $(this).prev('input');
        var value = parseInt(input.val()) + 1;
        input.val(value);
    });
});
