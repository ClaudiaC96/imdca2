

//Function to initialise and set properties for all overlay panels
var initOverlays = function() {

    //Initialise popup overlays
    $('#interests-content').popup({
        scrolllock: true,
        transition: "all 0.5s"
    });
    $("#education-content").popup({
        scrolllock: true,
        transition: "all 0.5s"
    });
    $("#tech-skills-content").popup({
        scrolllock: true,
        transition: "all 0.5s"
    });
    $("#prof-exp-content").popup({
        scrolllock: true,
        transition: "all 0.5s"
    });

};


/*Function to format the CSS for links when the mouse hovers over them
Purpose of the function is to remove text-decoration and blue highlighting*/
var formatLinks = function() {

    $("h3 > a").hover(function() {
        $(this).css("text-decoration", "none");
    });

    $("p > a").mouseenter(function() {
        $(this).css("text-decoration", "none");
        $(this).css("color", "#e6e6e6");
    });

    $("p > a").mouseleave(function() {
        $(this).css("text-decoration", "none");
        $(this).css("color", "");
    });

};


/*Function to format the CSS of the envelope and email address under Contact Me
This function makes the envelope and email white and adds a slight grey highlight
when the mouse is over the envelope or email address*/
var formatContactMe = function() {

    $("a > i").mouseenter(function() {
        $(this).css("text-decoration", "none");
        $(this).css("color", "#e6e6e6");
    });

    $("a > i").mouseleave(function() {
        $(this).css("text-decoration", "none");
        $(this).css("color", "");
    });

};



//Calling of the previouslt defined functions when the document has completely loaded
$(document).ready(function() {

    initOverlays();
    formatLinks();
    formatContactMe();

});
//End document.ready
