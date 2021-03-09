import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'totos/INSERT';
const TOGGLE = 'totos/TOGGLE';
const REMOVE = 'totos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
    Map({
        id: 0,
        text: '리엑트 공부하기',
        done: true
    }),
    Map({
        id: 1,
        text: '컴포넌트 스타일링 해보기',
        done: false
    })
]);

export default handleActions({
    [INSERT]: (state, action) => {
        const { id, text, done } = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },
    [TOGGLE]: (state, action) => {
        const { payload: id } = action;
        // = const id = action.payload
        /* 비구조화 할당을 통하여 id라는 레퍼런스에 action.payload란 값을 넣는다.
        이 작업이 필수는 아니지만, 나중에 이 코드를 보게 되었을 때 여기서의 payload가
        어떤 값을 의미하는지 이해하기 쉬워진다. */

        // 전달받은 id를 가지고 index 조회
        const index = state.findIndex(todo => todo.get('id') === id);
        
        // updateIn을 통해 현재 값을 참조하여 반대값으로 설정
        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE]: (state, action) => {
        const { payload: id } = action;
        const index = state.findIndex(todo => todo.get('id') === id);
        return state.delete(index);
    }
}, initialState)

