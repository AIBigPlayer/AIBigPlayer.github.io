var posts=["How-to-Use-Virtual-Credit-Cards/","chatgpt-search-travel-guide/","how-to-pay-for-chatgpt-team/","how-to-pay-for-chatgpt4/","how-to-regist-chatgpt/","how-to-pay-for-claude-pro/","how-to-use-sora/","how-to-use-chatgpt-search/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };