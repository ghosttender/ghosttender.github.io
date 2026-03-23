var posts=["2026/03/23/Linux进阶命令/","2026/03/23/Linux基础命令/","2026/03/22/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };