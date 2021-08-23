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


  //Controls for the left/right key and W&S Keys. Using requestAnimationFrame instead of setInterval because response is smoother
    (document).on('keydown', function (e) {
        var key = e.keyCode;
        if (key === 37 && move_left === false && game_over === false) {
            move_left = requestAnimationFrame(left);
        } else if (key === 39 && move_right === false && game_over === false) {
            move_right = requestAnimationFrame(right);
        } else if (key === 65 && move_left1 === false && game_over === false) {
            move_left1 = requestAnimationFrame(left1);
        } else if (key === 83 && move_right1 === false && game_over === false) {
            move_right1 = requestAnimationFrame(right1);
        }
    });

    $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if (key === 37 && game_over === false) {
            cancelAnimationFrame(move_left);
            move_left = false;
        } else if (key === 39 && game_over === false) {
            cancelAnimationFrame(move_right);
            move_right = false;
        } else if (key === 65 && game_over === false) {
            cancelAnimationFrame(move_left1);
            move_left1 = false;
        } else if (key === 83 && game_over === false) {
            cancelAnimationFrame(move_right1);
            move_right1 = false;
        }
    });

