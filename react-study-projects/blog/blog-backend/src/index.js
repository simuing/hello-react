require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');

const ssr = require('./ssr');

const {
    PORT: port = 4000, // 값이 존재하지 않는다면 4000을 기본 값으로 사용
    MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.error(e);
});

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// 라우터 설정
router.use('/api', api.routes()); //api 라우트 적용
router.get('/', ssr);

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());
app.use(ssr); // 일치하는 것이 없으면 ssr을 실행합니다.

app.listen(port, () => {
    console.log('listening to port ', port);
});