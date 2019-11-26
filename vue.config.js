module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    port: 1888,
    proxy: {
      "/api": {
        //服务地址
        target: "http://192.168.10.73:1888",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
