var posts=["2026/03/22/hello-world/","2026/03/23/Linux基础命令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };