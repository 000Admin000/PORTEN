let cart = {};

function loadCart() {
  if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
      showCart();
    } else {
      $('.main-cart-block').html('<p class="main-empty-cart">Корзина пуста</p>');
    }
};


function showCart() { 
  if(!isEmpty(cart)) {
    $('.main-cart-block').html('<p class="main-empty-cart">Корзина пуста</p>');
    $('.buy-price').html('');
  } else {
    $.getJSON('goods.json', function (data) {
      let goods = data;
      let out = '';
      let price = 0;
      for(let key in cart) {
        out += '<div class="main-cart-content">';
        out += `<img class="main-cart-image" src="img/${goods[key].image}" alt="product">`;
        out += `<h3 class="main-cart-title">${goods[key].name}</h3>`;
        out += `<div class="main-cart-count-block">`;
        out += `<div class="main-cart-count-plus" data-id="${key}"><i class="fas fa-plus"></i></div>`;
        out += `<p class="main-cart-count">${cart[key]}</p>`;
        out += `<div class="main-cart-count-minus" data-id="${key}"><i class="fas fa-minus"></i></div>`;
        out += '</div>';
        out += `<p class="main-cart-cost">${goods[key].cost} руб.</p>`;
        out += `<div class="main-cart-delete" data-id="${key}"><i class="fas fa-times"></i></div>`;
        out += '</div>';
        price += cart[key] * goods[key].cost;
      }
      
      $('.main-cart-block').html(out);
      $('.price').html("К оплате: " + price + " руб.");
      $('.buy').html('<div class="btn buy-products" id="buy-products">Купить</div>');
      $('.main-cart-delete').on('click', delGoods);
      $('.main-cart-count-plus').on('click', plusGoods);
      $('.main-cart-count-minus').on('click', minusGoods);
    });
  }
};

function delGoods() {
  let id = $(this).attr('data-id');
  delete cart[id];
  showCart();
  saveCart();
};

function plusGoods() {
  let id = $(this).attr('data-id');
  cart[id]++;
  showCart();
  saveCart();
};

function minusGoods() {
  let id = $(this).attr('data-id');
  if(cart[id] == 1) {
    delete cart[id];
  } else {
    cart[id]--;
  }
  showCart();
    saveCart();
};



function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

function isEmpty(object) {
  for(let key in object) 
    if(object.hasOwnProperty(key)) return true;
      return false;
};


$(document).ready(function(){
  loadCart();
  $('.send-email').on('click', sendEmail);
});

function sendEmail() {
  let ename = $('.popup-name').val();
  let email = $('.popup-email').val();
  let ephone = $('.popup-phone').val();
  if(ename != undefined & email != undefined & ephone != undefined) {
    if(isEmpty(cart)){  
      $.post(
        "core/mail.php",
        {
          "ename" : ename,
          "email" : email,
          "ephone" : ephone,
          "cart" : cart
        },
        function(data) {
          console.log(data);
        }
      );
    } else {
      alert('Корзина пуста')
    }
  } else {
    alert('Заполните поля');
  }
}




$('.buy').on('click', function() {
  let closeBtn = document.getElementById('close')
  let popup = document.getElementById('popup');
  let body = document.querySelector('body');
  popup.classList.toggle('popup-active');
  body.classList.add('overflow');
});
$('.close-popup').on('click', function() {
  let body = document.querySelector('body');
  popup.classList.remove('popup-active');
  body.classList.remove('overflow');
});


















































