var posts=["how-to-pay-for-chatgpt4/","How-to-Use-Virtual-Credit-Cards/","chatgpt-search-travel-guide/","how-to-pay-for-claude-pro/","how-to-regist-chatgpt/","how-to-pay-for-chatgpt-team/","how-to-use-chatgpt-search/","how-to-use-sora/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };