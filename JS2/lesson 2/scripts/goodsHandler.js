'use strict';
class Cart{
  constructor(){

  }
  placeOrder(){}
  removeItem(){}
  clearCart(){}
  sumPrice(){}
}

class CartItem{
  constructor(){

  }
  increaseAmount(){}
  decreaseAmount(){}
  sumPrice(){}
}

class GoodsList {
  constructor(goodsContClass = '.goods-list'){
    this.goodsContClass = goodsContClass;
    this.goods = [];
    this._fetchGoods();
  }
  _fetchGoods(){
    this.goods = [
      {id: 1, title: 'Shirt', price: 150 },
      {id: 2, title: 'Socks', price: 50 },
      {id: 3, title: 'Jacket', price: 350 },
      {id: 4, title: 'Shoes', price: 250 },
    ];
  }
  render(){
    const goodsBlock = document.querySelector(this.goodsContClass);
    for(let item of this.goods){
      const itemObj = new GoodsItem(item);
      goodsBlock.insertAdjacentHTML("beforeend" ,itemObj.render());
    }
  }
  sumGoodsPrice(){
    let sum = 0;
    for(let item of this.goods){
      sum += item.price;
    }
    return sum;
  }
}

class GoodsItem{
  constructor(item, img = 'https://placehold.it/150x150'){
    this.title = item.title;
		this.price = item.price;
		this.id = item.id;
		this.img = img;
  }

  render(){
    return `<div class="goods-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
  }
}

const goodsList = new GoodsList();
goodsList.render();