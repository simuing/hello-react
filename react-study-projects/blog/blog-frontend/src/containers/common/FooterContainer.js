import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import Footer from 'components/common/footer';

class FooterContainer extends Component {
    handleLoginClick = async () => {
        const { BaseActions, logged } = this.props;
        if(logged) {
            try {
                await BaseActions.logout();
                window.location.reload(); // 페이지 새로고침
            } catch (e) {
                console.log(e);
            }
            return;
        }
        BaseActions.showModal('login');
        BaseActions.initializeLoginModal();
    }
    render() {
        const { handleLoginClick } = this;
        const { logged } = this.props;

        return (
            <Footer onLoginClick={handleLoginClick} logged={logged}/>
        )
    }
}

export default connect(
    (state) => ({
        logged: state.base.get('logged')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(FooterContainer);