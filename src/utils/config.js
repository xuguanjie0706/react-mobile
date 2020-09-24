export default {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:7001/'
      : 'http://localhost:8000/',
};
