const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    // appId: 'wx187a17c53ca1dc17',
    appId: '',

    // 微信小程序 App Secret
    // appSecret: '1150e451804608c201d7e24eefa82d90',
    appSecret: '',

    // 是否使用腾讯云代理登录小程序。false，则需填写微信小程序Appid和Appsecret
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wx187a17c53ca1dc17',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-chengdu',
        // Bucket 名称
        fileBucket: 'cxy01',
        // 文件夹
        uploadFolder: 'images'
    },
    qcloudAppId: '1256135540',
    qcloudSecretId: 'AKID42qTvBoRRL6iCYlrnZCgAVhlgS5sDryy',
    qcloudSecretKey: '2vdAxu5Gfw8D9xd8gFvfWVRF99GXsMvf',

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
