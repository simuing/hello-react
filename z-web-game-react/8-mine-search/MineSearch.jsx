import React, { useReducer, createContext, useMemo } from 'react';
import Table from './Table';
import Form from './Form';

export const CODE = {
    MINE: -7,          //지뢰
    NORMAL: -1,        //정상
    QUESTION: -2,      //물음표
    FLAG: -3,          //깃발
    QUESTION_MINE: -4, //지뢰칸에 물음표
    FLAG_MINE: -5,     //지뢰칸에 깃발
    CLICKED_MINE: -6,  //지뢰 클릭
    OPENED: 0,         //정상적으로 연 칸 (0 이상이면 OPENED)
}

//export 해서 다른 컴포넌트에서 사용할 수 있도록 한다.
export const TableContext = createContext({ 
    tableData: [],      //배열 모양만 맞춰준다.
    dispatch: () => {}, //함수 모양만 맞춰준다.
});

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
}

export const START_GAME = 'START_GAME';

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME: {
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine)
            }
        }
        default:
            return state;
    }
}

const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // useMemo로 캐싱해주어 성능 최적화를 한다.
    // dispatch는 절대로 바뀌지 않기 때문에 바뀌는 목록엔 추가하지 않아도 된다.
    const value = useMemo(() => ({ tableData: state.tableData, dispatch }), [state.tableData]);

    return (
        <TableContext.Provider value={value}>
            <Form/>
            <div>{state.timer}</div>
            <Table />
            <div>{state.result}</div>
        </TableContext.Provider>
    )
}

export default MineSearch;