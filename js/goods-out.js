
let cart = {};


shop.addEventListener('click', function(){
	let shop = document.getElementById('shop');
	let miniCart = document.getElementById('mini-cart');

	miniCart.classList.toggle('mini-cart-active');

});


function init() {
  
  // Вывод товара на главную
  $.getJSON("goods.json", goodsOut);
 
}
function isEmpty(object) {
  for(let key in object) 
    if(object.hasOwnProperty(key)) return true;
      return false;
};
function goodsOut(data) {
  let out = '';
  for(let key in data) {
    out += '<div class="product-content">';
    out += `<img class="product-img" src="img/${data[key].image}" alt="product">`;
    out += `<h3 class="product-title">${data[key].name}</h3>`;
    out += `<p class="product-cost">${data[key].cost} руб.</p>`;
    out += `<button class="product-buy btn" data-id="${key}">Купить</button>`;
    out += '</div>';
  }
  $('.procuct-add').html(out);
  $('.product-buy').on('click', addToCart);
}



function addToCart() {
  //Добавление товара в корзину
  let id = $(this).attr('data-id');
  if(cart[id] == undefined) {
    cart[id] = 1;
  } else {
    cart[id]++;
  }
  showMiniCart();
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}




function showMiniCart() {
  if(!isEmpty(cart)) {
    $('.mini-cart-content-block').html('<p class="empty-cart">пусто</p>');
  } else
  $.getJSON('goods.json', function(data) {
    let goods = data;
    let out = '';
    for(let key in cart) {  
      out += `<div class="mini-cart-content">`;
      out += `<h3 class="mini-cart-title">${goods[key].name}</h3>`;
      out += `<p class="mini-cart-count">${cart[key]}x</p>`;
      out += `<p class="mini-cart-cost">${goods[key].cost}руб.</p>`;
      out += `<div class="mini-cart-delete" data-id="${key}"><i class="fas fa-times"></i></div>`;
      out += '</div>';
    }
    $('.mini-cart-content-block').html(out);
    $('.mini-cart-delete').on('click', delGoods);
  });

};
  
function delGoods() {
  let id = $(this).attr('data-id');
  delete cart[id];
  showMiniCart();
  saveCart();
};

function loadCart() {
  if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    showMiniCart();
  }
}



$(document).ready(function(){
  init();
  loadCart();
});



























