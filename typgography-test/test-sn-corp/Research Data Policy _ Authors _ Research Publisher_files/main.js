var richtextFlaps = function ($) {
    $('.richtext').each(function () {
        var $richtext = $(this);

        // normalize
        $('li.flapContent--paragraph', $richtext).removeClass('flapContent--paragraph').closest('ol, ul').addClass('flapContent');
        $('table.flapContent--paragraph').removeClass('flapContent--paragraph').addClass('flapContent');

        $richtext.find('.flapHead').each(function () {
            var flapHead = $(this);

            flapHead
                .nextUntil('.flapHead', '.flapContent')
                .wrapAll('<div class="flapContents"></div>');

            flapHead.on('click', function () {
                flapHead.toggleClass('hideContent');
                flapHead.next().eq(0).slideToggle();
            });
        });

        $richtext.find('.flapContents').hide();

        $('<hr class="hr">').insertAfter($richtext.find('.flapContents:not(:last)'));
    });
};

var editLinks = function ($) {
    var initStudioSetup = function (url) {
        var studioWindow = null;
        if (studioWindow != null && !studioWindow.closed) {
            studioWindow.close();
        }
        studioWindow = window.open(url, 'studioWindow');
        window.setTimeout(function () {
            if (studioWindow != null && !studioWindow.closed) {
                studioWindow.close();
            }
        }, 4000);
    };

    var closeContextMenu = function ($) {
        $('.context').removeClass('context');
        $('.context-dev').removeClass('context-dev');
    };

    $('body').on('click', function () {
        closeContextMenu($);
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            closeContextMenu($);
        }
    });

    $('[class*="item"] .edit-links a.edit, [class*="item"] .edit-links a.edit-main').on('click', function (event) {
        var $item = $(this);
        event.preventDefault();
        event.stopPropagation();
        initStudioSetup($item.attr('href'));
        closeContextMenu($);
    });


    $('[class*="item"] .edit-links a.settings').on('click', function (event) {
        var $item = $(this);
        event.preventDefault();
        event.stopPropagation();
        $item.parent().toggleClass('show-settings');
    });

    $('[class*="item"] .edit-links').on('click', function (event) {
        event.stopPropagation();
    });

    $('[class*="item"]').on('contextmenu', function (event) {
        var $item = $(this);
        var $editLinks = $item.find('.edit-links');
        if ($editLinks.length === 0) {
            return;
        }
        if (event.shiftKey) {
            return;
        }
        closeContextMenu($);
        $editLinks.css({
            left: event.clientX - 30,
            top: event.clientY - 15
        });

        $item.addClass('context');
        if (event.ctrlKey) {
            $item.addClass('context-dev');
        }
        event.preventDefault();
        event.stopPropagation();
    });

    $('.edit-links span.debug-distances').on('click', function (event) {
        var $item = $(this);
        event.preventDefault();
        event.stopPropagation();
        $('body').toggleClass('debug-distances');
    });
};

var clickOnLinkedItems = function ($) {
    $('.linked').each(function () {
        var $item = $(this);
        var $a = $item.find('.core a[href]');
        if ($a.length == 0) {
            $item.removeClass('linked');
            return;
        }
        var url = $($a[0]).attr('href');

        if (url.length > 1) {
            $item.attr('title', $($a[0]).attr('title'));
            $item.on({
                'click': function (event) {
                    event.preventDefault();
                    window.location.href = url;
                }
            });
        }
    });
};

var matchHeight = function ($) {
    // no op, every data-mh attribute with the same id builds a group that gets the same height per row;
};

var mobileFlaps = function ($) {
    $('.flap--mobile').on('click', function () {
        $(this).toggleClass('flap--open');
    });
};

var mobileMainNavigation = function ($) {
    $('.collection-header .menu').on('click', function () {
        $('.collection-header > div > .core').toggleClass('header__state--navigation-visible');
    });
};

var isCurrentPageInSection = function (sectionLink) {
    return document.location.pathname.indexOf(sectionLink) === 0;
};

var highlightMainNavigation = function ($) {
    $('.collection-navigation-header [data-section-link], .collection-navigation-header a[href]').each(function () {
        var $this = $(this);
        var $sectionLink = $this.attr('data-section-link') || $this.attr('href');
        if (isCurrentPageInSection($sectionLink)) {
            $this.addClass('current-section');
        }
    });
};


var clickMainNavigationTopLevelLinks = function ($) {
    $('.collection-navigation-header [data-section-link]')
        .on('click', function (event) {
            var location = $(this).data('section-link');
            if (location && isLarge()) {
                event.preventDefault();
                document.location = location;
            }
        });
};

var sliderStage = function ($) {
    $('.collection-slider-stages .core > ul').bxSlider({
        auto: true,
        pause: 5000,
        autoHover: true,
        mode: isLarge() ? 'fade' : 'horizontal'
    });
};

var slider = function ($) {
    $('.collection-slider--listwrap').show();
    var obj;
    if (isSmall()) {
        obj = $('.collection-slider .core > ul').bxSlider({
            adaptiveHeight: false,
            slideWidth: 1000,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 30
        });
    } else if (isMedium()) {
        obj = $('.collection-slider .core > ul').bxSlider({
            adaptiveHeight: false,
            slideWidth: 1000,
            minSlides: 2,
            maxSlides: 2,
            slideMargin: 30
        });
    } else {
        obj = $('.collection-slider .core > ul').bxSlider({
            adaptiveHeight: false,
            infiniteLoop: false,
            slideWidth: 2100,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 30
        });
    }
};


var breakpoints = {
    small: 0,
    medium: 640,
    large: 1024
};

var windowWidthInRange = function (lower, upper) {
    var width = windowWidth();
    return width > lower && (upper < 0 || width <= upper);
};

var windowWidth = function () {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var windowHeight = function () {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
};

var isSmall = function () {
    return windowWidthInRange(breakpoints.small, breakpoints.medium);
};

var isMedium = function () {
    return windowWidthInRange(breakpoints.medium, breakpoints.large);
};

var isLarge = function () {
    return windowWidthInRange(breakpoints.large, -1);
};

var addShowMoreBtn = function ($) {
    $('.collection-general-grid--rows-only-1').each(function (idx, element) {

        var calculateHeight = function (more, $collection) {
            var marginBottom = 30;
            var nrOfRows = more ? $collection.children().length : (isSmall() ? 2 : 1);
            var height = 0;
            $collection.children().slice(0, nrOfRows).map(function (i, v) {
                height += $(v).outerHeight() + marginBottom
            });
            return height + 'px';
        };

        var $collectionContainer = $(element);
        $collectionContainer.css('display', 'block');

        var $collectionCore = $collectionContainer.find('> div > .row > .column > .core');
        var $collection = $collectionCore.find('.row-block-grid');

        var showMoreLabel = $collectionCore.attr('data-rows-label-showmore') || 'Show More';
        var showLessLabel = $collectionCore.attr('data-rows-label-showless') || 'Show Less';

        var $btnMore = $('<button class="show-more__more">' + showMoreLabel + '</button>');
        var $btnLess = $('<button class="show-more__less">' + showLessLabel + '</button>');
        var $btnHtml = $('<div class="show-more"></div>');
        $btnHtml.append($btnMore);
        $btnHtml.append($btnLess);

        $collectionCore.append($btnHtml);

        $btnMore.on("click", function () {
            showHideCollection(true);
        });

        $btnLess.on("click", function () {
            showHideCollection(false);
        });

        $collection.css('max-height', calculateHeight(false, $collection, $));

        var showHideCollection = function (more) {
            $collection.css('max-height', calculateHeight(more, $collection, $));

            if (more) {
                $btnMore.hide();
                $btnLess.css('display', 'inline-block');
            } else {
                $btnMore.css('display', 'inline-block');
                $btnLess.hide();
            }
        };

    });
};

var getParameterFromUrl = function (url, variable) {
    const params = url.split("?")[1];
    if (!params) {
        return false;
    }
    const vars = params.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
};

jQuery(document).ready(function ($) {
    richtextFlaps($);
    editLinks($);
    clickOnLinkedItems($);
    matchHeight($);
    movingImageVideo($);
    mobileFlaps($);
    mobileMainNavigation($);
    highlightMainNavigation($);
    clickMainNavigationTopLevelLinks($);
    addShowMoreBtn($);
    sliderStage($);
    slider($);
    search($);
    forms($);
});
