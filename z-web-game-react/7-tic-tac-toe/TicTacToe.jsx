import React, {useState, useReducer} from 'react';
import Table from './Table';

// useReducer: 자식의 자식 컴포넌트로 연달아 데이터를 전달해야 하는 경우
// 하나의 state로 하나의 setState를 하여 전달할 수 있도록 한다.
// 세 번째 인자는 지연 초기화로 복잡할 때 쓰므로 첫번째, 두번째인자로 실습을 진행한다.

const initialState = {
    winner: '',
    turn: '0',
    tableData: [['','',''], ['','',''], ['','','']],
};

const reducer = (state, action) => {
    
}

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData, setTableData] = useState(['', '', ''],['', '', ''],['', '', '']);
    return (
        <>
            <Table />
            {winner && <div>{winner}님의 승리</div>}
        </>
    )
}

export default TicTacToe;