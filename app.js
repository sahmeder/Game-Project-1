$(function () {

    var animation;

    //assigning DOM objects to variables to make calling DOM easier
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var restart_btn = $('#restart_btn');

   //variables to access DOM to be used for control functions later
   var container_width = parseInt(container.width());
   var container_height = parseInt(container.height());
   var pole_width = parseInt(pole.width());
   var bird_height = parseInt(bird.height());
   var bird_width = parseInt(bird.width());