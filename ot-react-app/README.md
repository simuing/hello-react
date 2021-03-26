
## 프로젝트 설명
생활코딩 - React 를 따라 보고 작성한 공부기록
- [생활코딩 React 바로가기](https://opentutorials.org/module/4058)
  
#### React - 5. create react app을 이용해서 개발환경구축

##### npm 과 npx 의 차이
>$ npx create-react-app
>$ npm create-react-app

npm이 Node계 앱스토어에 있는 프로그램을 설치하는 개념이라면
npx는 앱 프로그램을 임시로 설치하여 일회성으로 사용하고 지우는 개념. 
설치할 때마다 최신상태의 앱을 설치할 수 있다는 장점이 있다.

##### 현재 경로에 create-react-app 설치
>$ create-react-app .

현재 경로를 프로젝트 경로로 지정하여 create-react-app을 설치한다.


#### React - 9. 배포하는 법

##### build
>$ npm run build

배포용 프로덕션 모드로 빌드한다.

##### serve
>$ npm install -g serve

serve를 전역으로 설치하면 serve 명령어로 서버를 실행시킬 수 있다.

>$ npx serve -s build
-s의 의미는 build라는 디렉토리를 다큐먼트 루트로 하겠다는 뜻이다.
