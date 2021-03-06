# 리덕스의 세 가지 규칙

## 12.3.1 스토어는 단 한 개
<div>
    스토어는 언제나 단 한 개입니다. 스토어를 여러 개 생성해서 상태를 관리하면 안 됩니다. 그 대신 리듀서를 여러 개 만들어서 관리할 수 있습니다.
</div>


## 12.3.2 state는 읽기 전용
<div>
    리덕스의 상태, state 값은 읽기 전용입니다. 이 값은 절대로 직접 수정하면 안됩니다. 그렇게 하면 리덕스의 구독 함수를 제대로 실행하지 않거나 컴포넌트의 리렌더링이 되지 않을 수 있습니다.
</div>


## 12.3.3 변화는 순수 함수로 구성
<div>

    모든 변화는 순수 함수로 구성해야 합니다. 여기에서 함수란 리듀서 함수를 가리킵니다. 순수 함수에서 결과 값을 출력할 때는 파라미터 값에만 의존해야 하며, 같은 파라미터는 언제나 같은 결과를 출력해야 합니다.

    리듀서 함수 내부에서는 현재 날짜를 반환하는 new Date()함수나 Math.random() 함수 등도 사용하면 안됩니다.
</div>


## 12.3.4 정리
<div>
    리덕스는 더욱 효율거으로 상태 관리를 할 수 있는 라이브러리입니다. 스토어에 상태 정보를 가진 객체를 넣어 두고, 액션이 디스패치되었을 때 리듀서 함수를 이용하여 상태를 변화시키는 것이 주요 역할입니다. 그리고 상태가 변화될 때마다 스토어에 구독된 함수를 실행시킵니다.
</div>


# 13장 리덕스로 리엑트 애플리케이션 상태 관리
## 13.1.1.1 작업 환경 설정
$ yarn add redux react-redux

## 13.1.1.2 프로젝트 초기화
<div>
    <div>필요 없는 파일 제거 (아래 4개)</div>
    <ul>
        <li>App.css</li>
        <li>App.js</li>
        <li>App.test.js</li>
        <li>logo.svg</li>
    </ul>
</div>

## 13.1.1.3 디렉터리 생성
<div>
    <div>src 디렉터리 내부 새 디렉터리 생성</div>
    <ul>
        <li>action: 액션 타입과 액션 생성자 파일 저장</li>
        <li>components: 컴포넌트의 뷰가 어떻게 생길지 담당하는 프리젠테이셔널(presentational) 컴포넌트 저장</li>
        <li>containers: 스토어에 있는 상태를 props로 받아 오는 컨테이너(container) 컴포넌트들을 저장</li>
        <li>reducers: 스토어의 기본 상태 값과 상태의 업데이트를 담당하는 리듀서 파일 저장</li>
        <li>lib: 일부 컴포넌트에서 함께 사용되는 파일 저장</li>
    </ul>
</div>


## 13.1.2 프리젠테이셔널 컴포넌트와 컨테이너 컴포넌트
<div>
    프리젠테이셔널 컴포넌트와 컨테이너 컴포넌트는 리덕스를 사용하는 프로젝트에서 자주 사용하는 구조입니다. 이 구조는 멍청한(dumb) 컴포넌트와 똑똑한(smart) 컴포넌트라고도 알려져 있습니다.
</div>

### 13.1.2.1 프리젠테이셔널 컴포넌트
<div>
    프리젠테이셔널 컴포넌트는 오직 뷰만 담당합니다.

    안에 DOM 엘리먼트와 스타일이 있으며, 리덕스 스토어에 직접 접근할 권한은 없습니다.

    오직 props로만 데이터를 가져올 수 있습니다.

    대부분은 state가 없습니다. 있다고 해도 데이터와 관련된 것이 아니라 UI와 관련된 것이어야 합니다.

    주로 함수형 컴포넌트로 작성합니다. state가 있어야 하거나 최적화를 하려고 라이플사이클 메서드가 필요할 때는 클래스형 컴포넌트로 작성됩니다.
</div>

### 13.1.2.2 컨테이너 컴포넌트
<div>
    프리젠테이셔널 컴포넌트들과 컨테이너 컴포넌트들의 관리를 담당합니다.

    안에 DOM 엘리먼트와 스타일이 있으며, 리덕스 스토어에 직접 접근할 권한은 없습니다.

    오직 props로만 데이터를 가져올 수 있습니다.

    대부분은 state가 없습니다. 있다고 해도 데이터와 관련된 것이 아니라 UI와 관련된 것이어야 합니다.

    주로 함수형 컴포넌트로 작성합니다. state가 있어야 하거나 최적화를 하려고 라이플사이클 메서드가 필요할 때는 클래스형 컴포넌트로 작성됩니다.
</div>

