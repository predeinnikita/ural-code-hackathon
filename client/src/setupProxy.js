const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/hui",
    createProxyMiddleware({
      // target: "http://192.168.0.107:4010",
      target: "http://localhost:3001",
      changeOrigin: true,
      onProxyReq(e, req) {
        console.log(`[${req.method}] -> ${req.url}`);
      },
    })
  );
};
