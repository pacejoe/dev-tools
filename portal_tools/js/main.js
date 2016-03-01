/*
** file: js/main.js
** description: javascript code for "html/main.html" page
*/

function init_main () {
    $('html').hide().fadeIn('fast');
}

//bind events to dom elements
document.addEventListener('DOMContentLoaded', init_main);