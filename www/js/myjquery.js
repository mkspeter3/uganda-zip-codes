function copyToClipboard(my_value) {

    let dummy_input= document.createElement("input");
    document.body.append(dummy_input);
    dummy_input.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = my_value;
    dummy_input.select();
    document.execCommand("copy");
    document.body.removeChild(dummy_input);

    window.plugins.toast.showWithOptions(
        {
            message: "Zip Code Copied",
            duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
            position: "bottom",
            addPixelsY: -40  // added a negative value to move it up a bit (default 0)
        }
    );

    done_verify();

}



jQuery(document).ready(function() {

    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

});
