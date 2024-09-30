var posts=["2024/09/02/how-to-pay-for-chatgpt-team/","2024/09/02/how-to-pay-for-claude-pro/","2024/09/02/how-to-pay-for-chatgpt4/","2024/09/02/How-to-Use-Virtual-Credit-Cards/","2024/09/02/how-to-use-sora/","2024/09/02/how-to-regist-chatgpt/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };