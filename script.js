$(document).ready(function(){
    let offset ={offset: "80%"}
    $(".table_of_content_title").waypoint(function(){
        $(".table_of_content_title").addClass("animate__animated animate__fadeInLeft");
    },offset);
    $("#intro").waypoint(function(){
        $("#intro").addClass("animate__animated animate__fadeInLeft");
    },offset);
    $("#history").waypoint(function(){
        $("#history").addClass("animate__animated animate__fadeInLeft");
    },offset);
    $("#features").waypoint(function(){
        $("#features").addClass("animate__animated animate__fadeInLeft");
    },offset);
    $(".para").waypoint(function(){
        $(".para").addClass("animate__animated animate__fadeInRight");
    },offset);
    $(".article_image").waypoint(function(){
        $(".article_image").addClass("animate__animated animate__zoomIn");
    },offset);
    $(".article").waypoint(function(){
        $(".article").addClass("animate__animated animate__fadeInLeft");
    },offset);
    $(".ol").waypoint(function(){
        $(".ol").addClass("animate__animated animate__fadeInRight");
    },offset);
    $(".ul").waypoint(function(){
        $(".ul").addClass("animate__animated animate__fadeInRight");
    },offset);
    $(".list_link_1").waypoint(function(){
        $(".list_link_1").addClass("animate__animated animate__fadeInRight");
    },offset);
    $(".list_link_2").waypoint(function(){
        $(".list_link_2").addClass("animate__animated animate__fadeInRight");
    },offset);
    $(".list_link_3").waypoint(function(){
        $(".list_link_3").addClass("animate__animated animate__fadeInRight");
    },offset);

    
})