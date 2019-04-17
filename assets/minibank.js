$(function(){

    // --- togle sidebar -------
    $('#btn-toggler').on('click', function () {
        if($(this).hasClass('btnhide')){
            $('#btn-toggler').removeClass('btnhide');
            $('#btn-toggler').addClass('btnshow');
            $('.sidebar').css('left','-215px');
            $('.sidebar').css('transition','0.3s');
            $('.content').css('transition','0.3s');
            $('.content').css('margin-left', '0');
        }else{
            $('#btn-toggler').addClass('btnhide');
            $('#btn-toggler').removeClass('btnshow');
            $('.sidebar').css('left','0');
            $('.sidebar').css('transition','0.3s');
            $('.content').css('transition','0.3s');
            $('.content').css('margin-left', '215px');
        }
    });

    // --- active menu ---
    $(".nav-item").on("click", function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    // --- data table ---
    $(document).ready(function () {
        $('#tb-transactions').DataTable();
    });

})