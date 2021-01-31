'use strict';
let burgerMap = [
    {id: 1, price: 50, calorie: 20},
    {id: 2, price: 100, calorie: 40},
    {id: 3, price: 10, calorie: 20},
    {id: 3, price: 20, calorie: 5},
    {id: 5, price: 15, calorie: 10},
    {id: 6, price: 15, calorie: 0},
    {id: 7, price: 20, calorie: 5},
]
const inputs = document.querySelectorAll('input');
const priceBlock = document.querySelector('.price');
const calorieBlock = document.querySelector('.calorie');


class Hamburger{
    constructor(inputs){
        this.price = 0;
        this.calorie = 0;
        this._setValues(inputs);
    }
    _setValues(inputs){
        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].checked){
                this.price += burgerMap[i].price;
                this.calorie += burgerMap[i].calorie;
            }
        }
        this.setPriceBlock();
        this.setCalorieBlock();
    }
    resetValues(){
        this.price = 0;
        this.calorie = 0;
        this._setValues(inputs);
    }
    setPriceBlock(){
        priceBlock.innerHTML = `Цена ${this.price}р.`;
    }
    setCalorieBlock(){
        calorieBlock.innerHTML = `Калорийность ${this.calorie}кк`;
    }
}

let hamburger = new Hamburger(inputs);
inputs.forEach(element => {
    element.addEventListener('change', function () {
        hamburger.resetValues();
    })
});