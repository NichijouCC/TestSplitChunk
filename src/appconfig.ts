import envConfig from './env'
declare global {
    interface AppConfig {
        api: {
            boonrayApi: string,
            appApi: string
        };
        token: string;
        task_id: number;
    }

    interface Window {
        PRODUCTION_APPCONFIG: any;
    }

    const _APPCONFIG: AppConfig;
    const VERSION: string;
}

export class App3dConfig {
    static get data(): AppConfig {
        return process.env.NODE_ENV != "production" ? envConfig : window.PRODUCTION_APPCONFIG;
    }
}