/**
 * Following the main page load, the following elements are activated.
 * 
 * @author Arturo Mora-Rioja
 * @date   13/04/2018
 */
$(document).ready(function(){

    // The navigation menu and page header
    $("#navheader").load("navheader.htm");

    // The carousel
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        } else if($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
        }
    });

    // The footer
    $("#footer").load("footer.htm");
})