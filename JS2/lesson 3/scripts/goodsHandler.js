'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

class Cart {
  constructor() {
    this.cartGoods = [];
    this.cartBox = document.querySelector('.cart-box');
    this.cartWraper = document.querySelector('.cart-wraper');
    this.toggleStatus = false;
    this._toggleCart();
    this.render();
  }
  _toggleCart() {//переключение отображения корзины по кнопке "Корзина"
    const cartButton = document.querySelector('.cart-button');
    cartButton.addEventListener('click', () => {
      if (!this.toggleStatus) {
        this.cartBox.style.top = "0";
        this.cartWraper.style.height = `${this.cartBox.offsetHeight}px`;
        cartButton.style.backgroundColor = "rgb(69, 148, 49);";
        this.toggleStatus = true;
      }
      else {
        this.cartBox.style.top = `-${this.cartBox.offsetHeight}px`;
        this.cartWraper.style.height = "0";
        cartButton.style.backgroundColor = "rgb(69internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));";
        this.toggleStatus = false;
      }
    })
  }
  placeOrder() { }

  clearCart() {
    this.cartGoods = [];
  }
  sumPrice() {
    let sum = 0;
    for (let item of this.cartGoods) {
      sum += (item.price * item.quantity);
    }
    return sum;
  }
  isCartEmpty(cartGoods) {
    if (cartGoods.length == 0) return true;
  }
  cartItemsController(item) {
    const minusButton = document.querySelector(`[data-id="${item.id}"] #minus`);
    const plusButton = document.querySelector(`[data-id="${item.id}"] #plus`);
    const removeButton = document.querySelector(`[data-id="${item.id}"] #remove`);
    const inputQuantity = document.querySelector(`[data-id="${item.id}"] input`);
    minusButton.addEventListener('click', () => { item.decreaseAmount(); });
    plusButton.addEventListener('click', () => { item.increaseAmount(); });
    removeButton.addEventListener('click', () => { item.removeItem(item); });
    inputQuantity.addEventListener('change', function (event) {
      item.changeQuantity(event.target.value);
    })
  }
  render() {
    if (!this.isCartEmpty(this.cartGoods)) {
      this.cartBox.innerHTML = '';
      for (let item of this.cartGoods) {
        this.cartBox.insertAdjacentHTML("beforeend", item.render());
        this.cartItemsController(item);
      }
      if(this.toggleStatus){
        this.cartWraper.style.height = `${this.cartBox.offsetHeight}px`;
      }
      else{
        this.cartWraper.style.height = `-${this.cartBox.offsetHeight}px`;
      }
    }
    else{
      this.cartBox.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
    }
  }
}

class CartItem {
  constructor(item, img = 'https://placehold.it/40x40') {
    this.title = item.title;
    this.price = item.price;
    this.id = item.id;
    this.img = img;
    this.quantity = 1;
  }
  increaseAmount() {
    this.quantity += 1;
    cart.render();
  }
  decreaseAmount() {
    if (this.quantity > 1) this.quantity -= 1;
    cart.render();
  }
  changeQuantity(inputValue) {
    this.quantity = inputValue;
    cart.render();
  }
  removeItem(item) {
    for (let i = 0; i < cart.cartGoods.length; i++) {
      if (cart.cartGoods[i].id == item.id) {
        cart.cartGoods.splice(i, 1);
        break;
      }
    }
    cart.render();
  }
  sumPrice() {
    return this.quantity * this.price;
  }
  render() {
    return `<table><tr class="cart-item" data-id="${this.id}">
                <td class="image"><img src="${this.img}" alt="Some img"></td>
                <td class="title"><p>${this.title}</p></td>
                <td class="price"><p>${this.price}</p></td>
                <td class="quantity-block">
                  <p id="minus">-</p>
                  <input type="text" value="${this.quantity}"></input>
                  <p id="plus">+</p>
                </td>
                <td class="sum-price"><p>${this.sumPrice()}</p></td>
                <td class="remove"><p id="remove"><i class="far fa-times-circle"></i></p></td>
            </tr></table>`
  }
}

class GoodsList {
  constructor(goodsContClass = '.goods-list') {
    this.goodsContClass = goodsContClass;
    this.goods = [];
    this._fetchGoods()
      .then(data => {
        this.goods = [...data];
        this.render();
      });
  }
  _fetchGoods() {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const goodsBlock = document.querySelector(this.goodsContClass);
    for (let item of this.goods) {
      const itemObj = new GoodsItem(item);
      goodsBlock.insertAdjacentHTML("beforeend", itemObj.render());
      this.buyButtonController(itemObj);
    }
  }
  buyButtonController(item) {
    let button = document.querySelector(`[data-id="${item.id}"] .buy-btn`);
    button.addEventListener('click', function (event) {
      item.addToCart(item);
    });
  }
}

class GoodsItem {
  constructor(item, img = 'https://placehold.it/150x150') {
    this.title = item.product_name;
    this.price = item.price;
    this.id = item.id_product;
    this.img = img;
  }
  addToCart(item) {
    if (!this.isInCart(item.id)) {
      cart.cartGoods.push(new CartItem(item));
    }
    cart.render();
  }
  isInCart(id) {
    for (let item of cart.cartGoods) {
      if (item.id == id) {
        return true;
      }
    }
  }
  render() {
    return `<div class="goods-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
  }
}

const goodsList = new GoodsList();
const cart = new Cart();
goodsList.render();