export default {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:7001/'
      : 'http://106.14.182.16:7001/',
};
