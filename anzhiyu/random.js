var posts=["/2024/08/19/How-to-Use-Virtual-Credit-Cards/","chatgpt-search-travel-guide/","/2024/08/13/how-to-pay-for-claude-pro/","/2024/01/31/how-to-pay-for-chatgpt4/","/2024/03/06/how-to-pay-for-chatgpt-team/","/2024/02/23/how-to-regist-chatgpt/","how-to-use-chatgpt-search/","/2024/02/21/how-to-use-sora/","chatgpt-share/","bewildcard/","claude-share/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };