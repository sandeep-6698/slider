$('.next').click(() => {
        l = $('.slider-box').position().left;
        l = l < 0 ? l * -1 : l;
        $('.slider').scrollLeft(l + 300);
    })
    $('.prev').click(() => {
        l -= 300;
        $('.slider').scrollLeft(l);
    })