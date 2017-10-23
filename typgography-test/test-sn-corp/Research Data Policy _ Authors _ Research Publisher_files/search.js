const search = function ($) {
    const $searchField = $('.search-panel .text');

    const showMenu = function () {
        $('.search-menu').on('click', function () {
            $(this).parent('.search-root').toggleClass('active');
        });

    };

    const updateSearchInput = function () {
        const location = window.location;
        const href = location.href;
        const search = getParameterFromUrl(href, "queryString");
        const $queryString = $('#queryString');
        if (search && $queryString) {
            const formattedSearch = search.replace(/\+/g, ' ');
            $queryString.val(formattedSearch);
        }
    };

    $searchField.on('click', function () {
        $(this).val('');
    });

    $searchField.on('change input', function () {
        if ($(this).val() !== '') {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });

    showMenu();
    updateSearchInput();
};
