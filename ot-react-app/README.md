
## 프로젝트 설명
[생활코딩 React](https://opentutorials.org/module/4058)  를 따라 보고 작성한 공부기록입니다.

<br/>
<br/>




#### React - 5. create react app을 이용해서 개발환경구축

##### npm 과 npx 의 차이
>$ npx create-react-app
>$ npm create-react-app

npm이 Node계 앱스토어에 있는 프로그램을 설치하는 개념이라면 npx는 앱 프로그램을 임시로 설치하여 일회성으로 사용하고 지우는 개념.  
설치할 때마다 최신상태의 앱을 설치할 수 있다는 장점이 있다.  

##### 현재 경로에 create-react-app 설치
>$ create-react-app .

현재 경로를 프로젝트 경로로 지정하여 create-react-app을 설치한다.

<br/>
<br/>




#### React - 9. 배포하는 법

##### build
>$ npm run build

배포용 프로덕션 모드로 빌드한다.

##### serve
>$ npm install -g serve

serve를 전역으로 설치하면 serve 명령어로 서버를 실행시킬 수 있다.

>$ npx serve -s build
-s의 의미는 build라는 디렉토리를 다큐먼트 루트로 하겠다는 뜻이다.

<br/>
<br/>




#### React - 15.3. key
1. 부모 컴포넌트가 자식 컴포넌트에 state 정보 전달
2. 자식 컴포넌트 state 정보 출력
3. 동적 리스트 출력 시 key 지정 필요

<br/>
<br/>



#### React - 18. 베이스 캠프
리액트에서의 데이터 전달 방식  
- 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때는 props를 쓴다.
- 자식 컴포넌트가 부모 컴포넌트에 데이터를 전달할 때는 event를 쓴다.

<br/>

리덕스에서의 데이터 전달 방식
- 데이터를 각 컴포넌트에 분산 저장하는 것이 아닌 한 저장소(store)를 지정한다.
- 모든 컴포넌트가 store 데이터를 바라보기 때문에 store 정보가 바뀌면 바라보는 모든 컴포넌트가 영향을 받는다.
