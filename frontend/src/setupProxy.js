const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'http://localhost:3000', // Le chemin que vous souhaitez rediriger vers le backend
    createProxyMiddleware({
      target: 'http://localhost:3000', // L'URL du serveur Express
      changeOrigin: true,
    })
  );
};
