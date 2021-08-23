$(function () {

    var animation;

    //assigning DOM objects to variables to make calling DOM easier
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var restart_btn = $('#restart_btn');

   //variables to access DOM to be used for controls/collision detections later
   var container_width = parseInt(container.width());
   var container_height = parseInt(container.height());
   var pole_width = parseInt(pole.width());
   var bird_height = parseInt(bird.height());
   var bird_width = parseInt(bird.width());

    //game control functions
    var go_up = false;
    var go_down = true;
    var game_over = false;

    var bleft;
    var pleft;


    var bird_go = 'down';
    var bird_right_left = 'right';

    var top_angle = 6; 
    var right_left_angle = 0; 

    var move_right = false;
    var move_left = false;

    var move_right1 = false;
    var move_left1 = false;

    var who_won;

    ///////////////////////////////////////////

