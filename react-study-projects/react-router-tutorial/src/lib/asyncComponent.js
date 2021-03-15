import React from 'react';

/**
 * 이 함수는 컴포넌트를 import하는 함수를 호출하는 함수를 파라미터로 받습니다.
 * 사용 예시) asyncComponent(() => import('./Home'))
 */
export default function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        constructor(props) {
            super(props);
            if(AsyncComponent.Component) return;

            getComponent().then(({default: Component}) => {
                AsyncComponent.Component = Component;
                this.setState({Component});
            });
        }

        render() {
            const { Component } = this.state;
            if(Component) {
                return <Component {...this.props} />
            }
            return null;
        }
    }
}