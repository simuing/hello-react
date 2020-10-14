# 일정 관리 웹 어플리케이션 스터디용 프로젝트

### 프로젝트 생성
$ npx create-react-app todo-list

### 프로젝트 환경설정 eject
$ yarn eject

### Sass 관련 모듈 및 classnames 설치
$ yarn add sass-loader node-sass classnames

### webpack.config.js 설정 파일 수정
<!-- 기존 소스
    {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(
        {
            importLoaders: 3,
            sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'sass-loader'
        ),
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
    },
-->
<!-- 수정 소스 ('sass-loader'삭제, .concat({...}) 추가)
    {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders({
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
        }).concat({
            loader: require.resolve('sass-loader'),
            options: {
                sassOptions: {
                    includePaths: [paths.appSrc + '/styles'],
                    sourceMap: isEnvProduction && shouldUseSourceMap
                },
            }
        }),   
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true, 
    },
-->

### config/paths.js 의 styles 디렉터리 정의
<!--
module.exports = {
  (...),
  styles: resolveApp('src/styles') //추가
};
 -->

### open-color 적용
$ yarn add open-color

### src/styles 디렉터리에 utils.scss 파일을 만들고 open-color 라이브러리 불러오기
디렉터리 : src/styles/utils.scss
파일내용 : @import '~open-color/open-color';

### 메인 스타일 설정
