window.addEventListener("load", function() {
  // 获取 loading 动画元素和 body 元素
  var spinner = document.getElementById("loading-spinner");
  var body = document.querySelector("body");

  // 设置延迟执行代码
  setTimeout(function(){
    // 隐藏 loading 动画
    spinner.style.display = "none";
    // 移除 body 上的 loading 类，显示页面内容
    body.classList.remove("loading");
  }, 1500); // 延迟1秒执行
});