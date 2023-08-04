// 将代码放在 window 的 load 事件处理函数中
window.addEventListener("load", function() {
  // 获取 loading 动画元素和 body 元素
  var spinner = document.getElementById("loading-spinner");
  var body = document.querySelector("body");

  // 隐藏 loading 动画
  spinner.style.display = "none";
  // 移除 body 上的 loading 类，显示页面内容
  body.classList.remove("loading");
});
