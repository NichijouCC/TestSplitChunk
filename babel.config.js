module.exports = api =>
{
    api.cache(true);
    return {
        "presets": [
            [
                "@babel/env",
                process.env.NODE_ENV == "development" ? {
                    "corejs": "3.0.0",
                    "useBuiltIns": "usage",
                    "targets": {
                        "chrome": "77",
                    },
                } : {
                        "corejs": "3.0.0",
                        "useBuiltIns": "usage",
                        "targets": {
                            "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                        }
                    }
            ],
            "@babel/react",
            ['@babel/typescript', {
                allowNamespaces: true
            }],
        ],
        "plugins": [
            [
                "@babel/plugin-proposal-decorators",  // @babel/plugin-proposal-decorators需要在@babel/plugin-proposal-class-properties之前
                {
                    "legacy": true // 推荐
                }
            ],
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
        ]
    };
};