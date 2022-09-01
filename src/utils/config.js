/*
 * @Author: xgj
 * @since: 2022-09-01 21:31:45
 * @lastTime: 2022-09-01 21:41:22
 * @LastAuthor: xgj
 * @FilePath: /react-mobile/src/utils/config.js
 * @message:
 */
export default {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:7001/'
      : 'http://pick.yystart.com/',
  // url: 'http://pick.yystart.com/',
};
