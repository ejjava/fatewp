const effect = document.querySelector('.effect');
const buttons = document.querySelectorAll('.navbar button:not(.plus)');

buttons.forEach(button => {

    button.addEventListener('click', e => {

        const x = e.target.offsetLeft;

        buttons.forEach(btn => {
            btn.classList.remove('active');
        })

        e.target.classList.add('active');

        anime({
            targets: '.effect',
            left: `${x}px`,
            opacity: '1',
            duration: 600
        })

    })

})



// 获取按钮元素
const homeButton = document.querySelector(".navbar button:nth-child(1)");
const userButton = document.querySelector(".navbar button:nth-child(2)");
const plusButton = document.querySelector(".navbar button.plus");
const shoppingButton = document.querySelector(".navbar button:nth-child(4)");
const chatButton = document.querySelector(".navbar button:nth-child(5)");

// 获取要切换的页面元素
const homePage = document.querySelector("#home-page");
const userPage = document.querySelector("#user-page");
const plusPage = document.querySelector("#plus-page");
const shoppingPage = document.querySelector("#shopping-page");
const chatPage = document.querySelector("#chat-page");

// 设置默认显示的页面
homePage.style.display = "block";
userPage.style.display = "none";
plusPage.style.display = "none";
shoppingPage.style.display = "none";
chatPage.style.display = "none";

// 监听按钮点击事件，切换页面
homeButton.addEventListener("click", function() {
    homePage.style.display = "block";
    userPage.style.display = "none";
    plusPage.style.display = "none";
    shoppingPage.style.display = "none";
    chatPage.style.display = "none";
});

userButton.addEventListener("click", function() {
    homePage.style.display = "none";
    userPage.style.display = "block";
    plusPage.style.display = "none";
    shoppingPage.style.display = "none";
    chatPage.style.display = "none";
});

plusButton.addEventListener("click", function() {
    homePage.style.display = "none";
    userPage.style.display = "none";
    plusPage.style.display = "block";
    shoppingPage.style.display = "none";
    chatPage.style.display = "none";
});

shoppingButton.addEventListener("click", function() {
    homePage.style.display = "none";
    userPage.style.display = "none";
    plusPage.style.display = "none";
    shoppingPage.style.display = "block";
    chatPage.style.display = "none";
});

chatButton.addEventListener("click", function() {
    homePage.style.display = "none";
    userPage.style.display = "none";
    plusPage.style.display = "none";
    shoppingPage.style.display = "none";
    chatPage.style.display = "block";
});