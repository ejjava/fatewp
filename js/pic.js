
  window.onload = function () { // 一定要页面加载完成再调用
    waterFall.init('container', 'box');
  }

  window.onresize = function () {
    waterFall.init('container', 'box');
  }

  let waterFall = {
    init: function (container, box) {
      let windowWidth = window.innerWidth;
      let oContainer = document.getElementById(container);
      // oContainer.style.width = windowWidth > 1200 ? 1200 + 'px' : windowWidth + 'px';
      let oBoxs = oContainer.getElementsByClassName(box);
      let boxWidth = oBoxs[0].offsetWidth;
      let containerWidth = oContainer.offsetWidth;
      let col = containerWidth / boxWidth; // box列数
      oContainer.style.width = parseInt(col) * boxWidth + 'px'
      oContainer.style.height = '100vh'
      let arrHeight = []; // 用来记录每列已添加box的高度
      for (let i = 0; i < oBoxs.length; i++) {
        oBoxs[i].style.position = "absolute"; // 给每个box定义布局方式为绝对布局
        let boxHeight = oBoxs[i].offsetHeight;
        if (i < col - 1) { // 第一行
          arrHeight.push(oBoxs[i].offsetHeight);
          oBoxs[i].style.top = 0;
          oBoxs[i].style.left = i * boxWidth + 'px';
        } else {
          let minBoxHeight = Math.min.apply(null, arrHeight); // 求出arrHeight中最小高度的那一列
          let index = this.getIndex(minBoxHeight, arrHeight); // 获取以上最小高度那列的索引
          oBoxs[i].style.top = minBoxHeight + 'px';
          oBoxs[i].style.left = boxWidth * index + 'px';
          arrHeight[index] += oBoxs[i].offsetHeight; // 由于已添加box，所以此处更新arrHeight中已添加box那一列的高度值
        }
      }
    },
    getIndex: function (val, arr) { // 得到索引
      for (let i = 0; i < arr.length; i++) {
        if (val == arr[i]) {
          return i
        }
      }
    }
  }
  
  