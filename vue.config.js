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
        // 配置性能提示
        performance: {
            // 入口点最大体积警告阈值(单位:bytes)
            maxEntrypointSize: 5 * 1024 * 1024, // 5MB
            // 生成文件最大体积警告阈值(单位:bytes)
            maxAssetSize: 3 * 1024 * 1024, // 3MB
            // 关闭未使用的导出警告
            hints: process.env.NODE_ENV === 'production' ? 'warning' : false
        },
        // 配置代码分割
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        }
    },
}

