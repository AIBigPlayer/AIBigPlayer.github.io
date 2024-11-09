var posts=["How-to-Use-Virtual-Credit-Cards/","chatgpt-search-travel-guide/","how-to-pay-for-claude-pro/","how-to-pay-for-chatgpt4/","how-to-pay-for-chatgpt-team/","how-to-regist-chatgpt/","how-to-use-chatgpt-search/","/2024/02/21/how-to-use-sora/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };