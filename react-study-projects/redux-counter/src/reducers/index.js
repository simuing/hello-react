// import number from './number';
// import color from './color';

// import { combineReducers } from 'redux';


/* 서브 리듀서들을 하나로 합칩니다.
   combineReducers를 실행하고 나면, 나중에 store 형태를
   파라미터로 전달한 객체 모양대로 만듭니다.
   지금은 다음과 같이 만듭니다.
   {
       numberData: {
           number: 0
       },
       colorData: {
           color: 'black'
       }
   }
*/

// const reducers = combineReducers({
//     numberData: number, 
//     colorData: color
// });

// export default reducers;

import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};

function counter(state = initialState, action) {
    //레퍼런스 생성
    const { counters } = state;

    switch (action.type) {
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            }
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index), // 선택한 인덱스의 전 아이템들
                    {
                        ...counters[action.index], // 기존 객체에
                        number: counters[action.index].number + 1 // 새 number 값 덮어쓰기
                    },
                    ...counters.slice(action.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들
                ]
            }
        default:
            return state;
        
    }
}

export default counter;

