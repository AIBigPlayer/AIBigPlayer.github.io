var posts=["2024/03/06/how-to-pay-for-chatgpt-team/","2024/01/31/how-to-pay-for-chatgpt4/","2024/02/23/how-to-regist-chatgpt/","2024/08/13/how-to-pay-for-claude-pro/","2024/02/27/how-to-regist-onlyfans/","2024/03/18/onlyfans/how-to-subscribe-for-onlyfans/","2024/02/21/how-to-use-sora/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };