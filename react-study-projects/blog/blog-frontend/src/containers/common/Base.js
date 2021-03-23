import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import LoginModalContainer from 'containers/modal/LoginModalContainer';

class Base extends Component {
    initialize = async () => {
        const { BaseActions } = this.props;
        //localStorage에 로그인 상태를 저장하여 이 상태가 존재한다면 로그인 중인 것으로 간주합니다.
        if(localStorage.logged === "true") {
            BaseActions.tempLogin(); 
        }
        BaseActions.checkLogin();
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        return (
            <div>
                <LoginModalContainer/>
                {
                    // 전역적으로 사용하는 컴포넌트들이 있다면 여기에서 렌더링합니다.
                }
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Base);