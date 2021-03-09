/* action 객체를 만드는 액션 생성 함수들을 선언합니다(action creators).
   여기에서 () => ({})은 function() { return { } } 와 동일한 의미입니다.
*/

import * as types from './ActionType';

/* redux-action 쓰기 전 코드
export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});


export const setColor = (color) => ({// 다른 액션 생성자들과 달리 파라미터를 갖고 있습니다.
    type: types.SET_COLOR,
    color
}); */


/* redux-action 쓴 후 코드
 */
export const increment = createAction(types.INCREMENT);
export const decrement = createAction(types.DECREMENT);

// export const setColor = createAction(types.SET_COLOR);
// setColor({index: 5, color: '#fff'});

// 두 번째 파라미터에 payload 생성 함수를 전달하여 코드상으로 명시해 줄 수 있다.
export const setColor = createAction(types.SET_COLOR, ({index, color}) => ({index, color}));