const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    publicPath: "./",
    // 配置source map，改善错误定位
    productionSourceMap: true, // 在生产环境中生成source map
    // 开发服务器配置，允许手机访问
    devServer: {
        host: '0.0.0.0', // 允许外部设备访问
        port: 8081, // 设置开发服务器端口
        disableHostCheck: true, // 禁用主机检查，允许手机访问
        compress: true // 启用gzip压缩，提升加载速度
    },
    // 配置webpack
    configureWebpack: {
        // 根据环境配置不同的devtool
        devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map',
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
    }
}

