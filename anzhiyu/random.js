var posts=["How-to-Use-Virtual-Credit-Cards/","how-to-pay-for-chatgpt4/","how-to-pay-for-claude-pro/","how-to-pay-for-chatgpt-team/","chatgpt-search-travel-guide/","how-to-use-sora/","how-to-use-chatgpt-search/","how-to-regist-chatgpt/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };