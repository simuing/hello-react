// 웹 브라우저에서 자바스크립트 코드를 실행할 때, 
// 리덕스의 초깃값이 서버사이드 렌더링으로 주어졌다면 이 값은 true로 설정됩니다.
let cancel = process.env.APP_ENV === 'browser' && !!window.__PRELOADED_STATE__;

// 클라이언트 쪽에서 첫 렌더링을 완료했다고 알리는 함수로, cancel 값을 false로 변경합니다.
export const inform = () => {
    cancel = false;
}

export default () => {
    return cancel;
}

// 이론상으로는 Post 또는 ListContainer 컴포넌트의 componentDidMount를 
// Base의 componentDidMount보다 늦게 호출하므로 문제없이 작동해야 하는 것이 맞습니다.
// 그러나 빌드하여 localhost:4000에서 페이지를 열면 Base의 componentDidMount를 먼저 호출합니다.
// 왜 그럴까요?
// 아직 고려하지 않은 변수가 있기 때문입니다. 바로 코드 스플리팅이죠.
// 코드 스플리팅을 하면서 라우트 관련 컴포넌트는 비동기적으로 불러오도록 설계했습니다.
// 따라서 프로젝트를 로딩할 때 라우트 관련 컴포넌트는 나중에 파일을 불러와 렌더링합니다.