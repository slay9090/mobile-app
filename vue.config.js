module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mobile-app/'
    : '/',

  lintOnSave: false,
  css: {
    extract: true,
  },
};