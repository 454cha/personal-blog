var posts=["2024/10/07/hello-world/","2024/10/08/my-First-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };