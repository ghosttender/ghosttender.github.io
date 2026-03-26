var posts=["2026/03/26/Java反序列化漏洞-Shiro-550反序列化漏洞/","2026/03/26/Java反序列化漏洞-Shiro-721反序列化漏洞/","2026/03/23/Linux下载安装+进程+网络命令/","2026/03/23/Linux基础命令/","2026/03/23/Linux进阶命令/","2026/03/22/hello-world/","2026/03/25/域渗透-白银票据伪造/","2026/03/26/框架漏洞-Apache-Log4j2漏洞/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };