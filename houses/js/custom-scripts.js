$(document).ready(function () {

    $('.product-select ul li').click(function(){
        if(!$(this).hasClass('active')){
            var currentProduct = $(this).html();
            var currentItem = $(this).index();
            $('.product-select ul li').removeClass('active');
            $(this).addClass('active');
            $('.product-select span').html(currentProduct);
            $('.options-block').removeClass('visible-options');
            $('.options-block').eq(currentItem).addClass('visible-options');
            changeOptions();
        }
    });

    $('.control-buttons li').click(function(){
        if(!$(this).hasClass('active')){
            var currentItem = $(this).index();
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
            $('.visible-options .visible').css('display', 'none');
            $('.visible-options .visible').removeClass('visible');
            $('.visible-options>div').eq(currentItem).addClass('visible');
            $('.visible-options>.visible').css('display', 'table');
            changeOptions();
        }
    });

    function changeOptions() {
        var optionsName = $('.visible-options .control-buttons>.active .product-name').html();
        var productCost = $('.visible-options .control-buttons>.active .product-cost').html();
        $('.general-info .product-cost span').html(productCost);
        $('.general-info .text-1 span').html(optionsName);
    }



    $('.control-panel .item-menu').click(function(){
        if(!$(this).hasClass('active')){
            var currentItem = $(this).index();
            $('.control-panel .item-menu').removeClass('active');
            $(this).addClass('active');
            $('.picture-block').css('display', 'none');
            $('.text-block').css('display', 'none');
            switch(currentItem) {
                case 0:
                    $('.slider-1').css('display', 'inline-block');
                    $('.general-info').css('display', 'inline-block');
                    break;
                case 1:
                    $('.slider-2').css('display', 'inline-block');
                    $('.general-info').css('display', 'inline-block');
                    break;
                case 2:
                    $('.layout-images').css('display', 'inline-block');
                    $('.layout-info').css('display', 'inline-block');
                    break;
            }
        }
    });

    $('.miniature').click(function(){
        if($(this).hasClass('unactive')){
            $('.miniature').addClass('unactive');
            $('.big-image').css('display','none');
            $(this).removeClass('unactive');
            var currentItem = $(this).index();
            if(currentItem == 0){
                $('.big-image-1').css('display','block');
                $('.layout-info-2').css('display','none');
                $('.layout-info-1').css('display','block');
            } else {
                $('.big-image-2').css('display','block');
                $('.layout-info-1').css('display','none');
                $('.layout-info-2').css('display','block');
            }
        }
    });

    $("#gallery-1").unitegallery();
    $("#gallery-2").unitegallery();

});

