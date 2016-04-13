'use strict';

$(function() {

    var $grid = $('.grid').masonry({
        // Aligns items to a horizontal grid
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
				percentPosition: true,
        gutter: 5,
        transitionDuration: '0.4s'
    });

    $grid.on('click', '.grid-item', function() {
        // Toggle class
        $(this).toggleClass('grid-item--gigante');
        $grid.masonry();
    });

    $grid.on('click', '.grid-item-remove', function(event) {
        // Remove item
        $grid.masonry('remove', event.currentTarget)
        $grid.masonry();
    });

});