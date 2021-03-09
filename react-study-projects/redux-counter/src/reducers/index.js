import number from './number';
import color from './color';

import { combineReducers } from 'redux';

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

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;