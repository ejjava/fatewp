// 获取按钮和卡片元素
var btn = document.querySelector('.btn');
var card = document.querySelector('.card');
var btn2 = document.querySelector('.btn2');
var card2 = document.querySelector('.card2');

// 点击按钮1显示卡片1
btn.addEventListener('click', function() {
  card.style.display = 'block';
});

// 点击按钮2显示卡片2
btn2.addEventListener('click', function() {
  kp2.style.display = 'block';
});

// 点击关闭按钮隐藏卡片1
function hideCard() {
  card.style.display = 'none';
}

// 点击关闭按钮隐藏卡片2
function hideCard2() {
  kp2.style.display = 'none';
}

// 点击空白处隐藏卡片1和卡片2
window.addEventListener('click', function(event) {
  if (event.target !== card && event.target !== btn && event.target !== cp2 && event.target !== btn2) {
    card.style.display = 'none';
    kp2.style.display = 'none';
  }
});