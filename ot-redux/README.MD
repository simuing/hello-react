```
생활코딩 Redux 공부기록
```
#### 리덕스 기본개념
1. 리덕스의 핵심은 Store이다.
2. Store는 정보가 저장되는 곳이다.
3. Store 안에는 state라는 실제 정보가 저장된다.
   - state는 절대 직접 접근이 불가하다. 다른 방법을 통해야한다.
4. reducer는 state와 action을 인자로 받아 처리한다.
5. render는 UI를 만들어줄, 개발자가 작성할 코드 부분
6. Store에 접근 하기 전에, 일종의 창구 직원 역할을 하는 함수(dispatch, subscribe, getState)가 있다.
7. render는 state 값을 참조해서, UI를 만든다.
8. state가 바뀔 때마다, render가 호출되게할 때, subscribe(구독)를 사용한다.

<br/>

#### without-redux.html 설명  
redux를 적용하지 않은 경우에 일어날 수 있는 하드코딩(?)을 작성한다.