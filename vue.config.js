const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    publicPath: "./",
    configureWebpack: {
        resolve: {
        alias: {
            // 设置@/的意义
            "@": resolve("src"),
        },
        },
    },
}

