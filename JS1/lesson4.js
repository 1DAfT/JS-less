"use strict";
//Задание №1
class Numbers{
    constructor(num){
        num = +num;  
        if(num == NaN || !Number.isInteger(num) || num < 0 || num > 999){
            console.log("Введено не число или чилсло не целое");
            this.units = null;
            this.tens = null;
            this.hundreeds = null;
        }
        else{
            this.units = num % 10;
            this.tens = num % 100 / 10 ^ 0;
            this.hundreeds = num % 1000 / 100 ^ 0;
        }
    }
}



//Задание №1.1
//в стиле ES5
/**
 * Конструктор объектов "Продукт" в стиле ES5.
 * @param {String} name - название продукта.
 * @param {Number} price - цена продукта.
 */
function ProductES5(name, price) {
    this.name = name;
    this.price = price;    
}
ProductES5.prototype.make25PercenteDiscount = function () {
    this.price *= 0.75;
}


//в стиле ES6
class ProductES6{
    /**
    * Конструктор объектов "Продукт" в стиле ES6.
    * @param {String} name - название продукта.
    * @param {Number} price - цена продукта.
    */
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    make25PercenteDiscount(){
        this.price *= 0.75;
    }
}



//Задание №1.2
//в стиле ES5
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
PostES5.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPostES5(author, text, date){
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;
AttachedPostES5.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}


//в стиле ES6
class PostES6{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}