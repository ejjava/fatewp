// 获取div元素
var contentDiv = document.getElementById("content");

// 添加更多的HTML内容
var cardHtml = `

<div class="card m-2 mdui-ripple">
        <div class="card-body">
            <blockquote class="blockquote">
                <h4 class="article-title"><a class="text-body" href="/2023/8.3/index.html"><span>博客更新了</span></a></h4>
                <footer class="blockquote-footer">2023.8.3</cite></footer>
                <a href="" class="badge badge-info">网站历程</a>
            </blockquote>
            <h6 class="article-title text-body"><a class="text-body" href="/2023/8.3/index.html"><span>更新了整体框架，评论，图片浏览</span></a></h6>
        </div>
    </div>


<div class="card m-2 mdui-ripple">
        <div class="card-body">
            <blockquote class="blockquote">
                <h4 class="article-title"><a class="text-body" href="/2023/8.2/index.html"><span>八月第一天的夜晚</span></a></h4>
                <footer class="blockquote-footer">2023.8.2</cite></footer>
                <a href="" class="badge badge-info">生活</a>
            </blockquote>
            <h6 class="article-title text-body"><a class="text-body" href="/2023/8.2/index.html"><span>这个八月第一天晚上随手拍的一张照片，就简单拿来分享一下</span></a></h6>
        </div>
    </div>
    <div class="card m-2 mdui-ripple">
        <div class="card-body">
            <blockquote class="blockquote">
                <h4 class="article-title"><a class="text-body" href="/2023/8.1/index.html"><span>Hello World</span></a></h4>
                <footer class="blockquote-footer">2023.8.1</cite></footer>
                <a href="" class="badge badge-info">网站历程</a>
            </blockquote>
            <h6 class="article-title text-body"><a class="text-body" href="/2023/8.1/index.html"><span>这是我手搓的一个乐射博客</span></a></h6>
        </div>
    </div>
    
    
    
    
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;