
var blueClicks = 0
var redClicks = 0
var greenClicks = 0
var yellowClicks = 0


$(document).ready(readyNow);

function readyNow(){
    

    function redBoxMaker () {
        $('ul').append('<li><button class=red-box></button></li>')
            redClicks++
        document.getElementById('redNumber').innerHTML = redClicks;
    }
    function blueBoxMaker () {
        $('ul').append('<li><button class=blue-box></button></li>')
            blueClicks++
        document.getElementById('blueNumber').innerHTML = blueClicks;
    }
    function greenBoxMaker () {
        $('ul').append('<li><button class=green-box></button></li>')
            greenClicks++
        document.getElementById('greenNumber').innerHTML = greenClicks;
    }
    function yellowBoxMaker () {
        $('ul').append('<li><button class=yellow-box></button></li>')
            yellowClicks++
        document.getElementById('yellowNumber').innerHTML = yellowClicks;
    }

    function redBoxMulti() {
        var loops = $('#numberBox').val();
        for (let i = 0; i < loops; i++) {
            redBoxMaker(); 
        }
    }
    function blueBoxMulti() {
        var loops = $('#numberBox').val();
        for (let i = 0; i < loops; i++) {
            blueBoxMaker(); 
        }
    }
    function greenBoxMulti() {
        var loops = $('#numberBox').val();
        for (let i = 0; i < loops; i++) {
            greenBoxMaker(); 
        }
    }
    function yellowBoxMulti() {
        var loops = $('#numberBox').val();
        for (let i = 0; i < loops; i++) {
            yellowBoxMaker(); 
        }
    }
    $('#buttonRed').on('click', redBoxMulti)
    $('#buttonBlue').on('click', blueBoxMulti)
    $('#buttonGreen').on('click', greenBoxMulti)
    $('#buttonYellow').on('click', yellowBoxMulti)
    $('body').on('click', '.red-box', function() {
        console.log('button clicked');
        $(this).parent().remove();
        redClicks--
        document.getElementById('redNumber').innerHTML = redClicks;})

    $('body').on('click', '.blue-box', function() {
        console.log('button clicked');
        $(this).parent().remove();
        blueClicks--
        document.getElementById('blueNumber').innerHTML = blueClicks;})
    $('body').on('click', '.green-box', function() {
        console.log('button clicked');
        $(this).parent().remove();
        greenClicks--
        document.getElementById('greenNumber').innerHTML = greenClicks;})
    $('body').on('click', '.yellow-box', function() {
        console.log('button clicked');
        $(this).parent().remove();
        yellowClicks--
        document.getElementById('yellowNumber').innerHTML = yellowClicks;})

        $inputBox = $('<input type="text" id="numberBox" value= "1" />')
        $('#numberOf').append($inputBox);

   

}