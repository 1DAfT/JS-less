'use strict';
const menuButton = document.querySelector('.menu-button');
const front = menuButton.firstChild;
const back = menuButton.lastChild;
menuButton.addEventListener('mouseover', function () {
    front.style.top = '-1px';
    front.style.left = '-1px';
    back.style.marginTop = '3px';
    back.style.left = '37px';
    console.log('mouseover')
})
menuButton.addEventListener('mouseleave', function () {
    front.style.top = '0px';
    front.style.left = '0px';
    back.style.marginTop = '1px';
    back.style.left = '35px';
    console.log('mouseleave')
})