$(function(){
    $('html').toggleClass('no-js js');
    $('.bs-docs-sidenav').Stickyfill();

    // Update sidebar highlighting based on Scrollspy
    $(window).on('activate.bs.scrollspy', function () {
        var spyTarget = $('[data-spy="scroll"]').data('target');
        var $activeSpy = $(spyTarget).find('.nav-link.active');
        var $tree = $activeSpy.parentsUntil('.bs-docs-sidenav', 'li');

        $tree.find('> a').addClass('active');
    });

    // Toggleable mobile table of contents button
    $('.toggle-toc').on('click', function () {
        var $this = $(this);

        $this
            .parents('.mobile-toc')
            .find('.js-toc')
            .toggle();

        var $btn = $this.find('[data-role="toggle"]');

        if ($btn.text() === 'Hide') {
            $btn.text('Show');
        } else {
            $btn.text('Hide');
        }
    });

    // Make the triangular pattern in the header
    if (uiColors) {
        var $masthead = $('.site-masthead');

        if ($masthead.length) {
            var t = new Trianglify({
                cellsize: 90,
                noiseIntensity: 0,
                x_gradient: [
                    uiColors[0],
                    uiColors[1],
                ],
            });
            var pattern = t.generate(window.screen.width | $masthead.outerWidth(), $masthead.outerHeight() * 1.2);

            var style = $('<style>.site-masthead { background-image: ' + pattern.dataUrl + '; }</style>');
            $('html > head').append(style);
        }
    }
});
