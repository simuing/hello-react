const path = require('path'); //경로 적용에 편리, 적극적인 사용 권장

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // development, production or none
    devtool: 'eval', //eval: 빠르게하겠다

    // jsx를 처리하려면 jsx가 설정된 babel을 설정해줘야한다. 개발할때만 쓴다. (-D로 설치)
    // npm i -D @babel/core          //기본
    // npm i -D @babel/preset-env    //babel-브라우저 호환
    // npm i -D @babel/preset-react  //jsx 호환
    // npm i -D @babel/preset-loader //babel-webpack 호환
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    // 중요한 entry, output
    // 확장자를 생략하려면 resolve:{extensions:[]}에 확장자 목록을 작성하여 자동 탐색하도록 할 수 있다.
    entry: {
        app: path.resolve(__dirname, "./src/client.jsx"), // 'WordRelay.jsx' 는 client.jsx에서 불러오기 때문에 작성하지 않아도 된다.
    }, // 입력

    module: {
        rules: [{ 
            test: /\.jsx?$/,
            use: {
                loader: 'bebel-loader', //jsx파일을 옛버전으로 돌아가게 설정
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ], //설치했던 presets를 넣어준다.
                    // plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), // __dirname:현재경로
        filename: 'app.js'
    }, // 출력
};