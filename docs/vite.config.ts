import Vue from '@vitejs/plugin-vue';
import { ConfigEnv, UserConfig, loadEnv } from 'vite';
import path from 'path';

export default (configEnv: ConfigEnv) => {
    console.info(configEnv);
    const env = loadEnv(configEnv.mode, path.resolve(process.cwd(), 'docs'));
    console.table(env);
    return {
        base: env.VITE_BASE_URL,
        plugins: [Vue()],
    } as UserConfig;
};
