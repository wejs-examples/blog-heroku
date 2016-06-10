var path = require('path');
module.exports = {
  appName: process.env.APP_NAME || 'We.js blog',
  subtitle: process.env.APP_DESCRIPTION || 'A awsome we.js blog',

  // default favicon, change in your project config/local.js
  favicon: path.resolve(__dirname, '..', 'files/public/favicon.png'),
  // logo public url path
  appLogo: process.env.APP_LOGO || '/public/project/logo.jpg',

  site: {
    homeBg : process.env.APP_HOMEBG || '/public/project/home-bg.jpg'
  }
}