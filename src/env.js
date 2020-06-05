const NODE_ENV = process.env.NODE_ENV;
const config = {
    development: {
        bakendAPI: "http:loalhost:3300",
        socketUrl: "xxxxxaaaaabbbb",
    },
    production: {
        // 开发的配置放在了 "./public/config.js" 里面,方便打包后修改,不用重新打包
    }
}
module.exports = config[NODE_ENV];