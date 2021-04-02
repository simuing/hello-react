import React, {useState, useReducer, useCallback } from 'react';
import Table from './Table';

// useReducer: 자식의 자식 컴포넌트로 연달아 데이터를 전달해야 하는 경우
// 하나의 state로 하나의 setState를 하여 전달할 수 있도록 한다.
// 세 번째 인자는 지연 초기화로 복잡할 때 쓰므로 첫번째, 두번째인자로 실습을 진행한다.

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [['','',''], ['','',''], ['','','']],
};

// action 변수는 대문자로 하는게 좋다.(커뮤니티 암묵적 룰)
const SET_WINNER = 'SET_WINNER';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            // state.winner = action.winner; 이렇게 하면 안된다. (불변성을 지키기 위함)
            return {
                ...state,
                winner: action.winner,
            }
    }
}

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData, setTableData] = useState(['', '', ''],['', '', ''],['', '', '']);

    const onClickTable = useCallback(() => {
        dispatch({ type: SET_WINNER, winner: 'O' }); 
    },[],)

    return (
        <>
            <Table onClick={onClickTable} />
            {winner && <div>{winner}님의 승리</div>}
        </>
    )
}

export default TicTacToe;