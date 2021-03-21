import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender, applyPenders } from 'redux-pender';

import * as api from 'lib/api';



// action types
const GET_POST = 'post/GET_POST';

// action creators
export const getPost = createAction(GET_POST, api.getPost);
// export const getPost = createPenderAction(GET_POST, api.getPost);

//initial state
const initialState = Map({
    post: Map({})
})

// reducer
const reducer = handleActions({
    ...pender({
        type: GET_POST,
        onPending: (state, action) => {
            return state; // do something
        },
        onSuccess: (state, action) => {
            return {
                post: action.payload.data
            }
        },
        onFailure: (state, action) => {
            return state; // do something
        }
    })
}, initialState)

// reducer
export default applyPenders(reducer, [
    {
        type: GET_POST,
        onPending: (state, action) => {
            return state; // do something
        },
        onSuccess: (state, action) => {
            return {
                post: action.payload.data
            }
        },
        onFailure: (state, action) => {
            return state; // do something
        }
    }
])