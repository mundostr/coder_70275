import * as url from 'url';


const config = {
    PORT: 5050,
    DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)),
    // getter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/uploads` },
    // MONGODB_URI: 'mongodb://127.0.0.1:27017/coder70275',
    MONGODB_URI: 'mongodb+srv://coder70275:coder2024@cluster0.4qaobt3.mongodb.net/coder70275'
};


export default config;
