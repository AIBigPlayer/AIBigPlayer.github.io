var posts=["how-to-pay-for-chatgpt4/","how-to-pay-for-chatgpt-team/","How-to-Use-Virtual-Credit-Cards/","how-to-pay-for-claude-pro/","how-to-regist-chatgpt/","how-to-use-sora/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };