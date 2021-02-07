'use strict';
const block = document.querySelector('div');
let text = block.textContent;
//text = text.replace(/'/g, '"');
text = text.replace(/\B'|'\B/g, '"');
block.textContent = text;