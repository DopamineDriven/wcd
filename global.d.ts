declare namespace Node {
    interface ProcessEnv {
        NODE_ENV: string;
        DB_USER: string;
        DB_PASSWORD: string;
        DB_CLUSTER: string;
        DB_URL: string;
    }
}