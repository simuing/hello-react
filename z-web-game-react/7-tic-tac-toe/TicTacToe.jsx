import React, { useReducer, useCallback, useEffect } from 'react';
import Table from './Table';

// useReducer: 자식의 자식 컴포넌트로 연달아 데이터를 전달해야 하는 경우
// 하나의 state로 하나의 setState를 하여 전달할 수 있도록 한다.
// 세 번째 인자는 지연 초기화로 복잡할 때 쓰므로 첫번째, 두번째인자로 실습을 진행한다.

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['','',''], 
        ['','',''], 
        ['','','']
    ],
    recentCell: [-1, -1], //없는 칸으로 초기화
};

// action 변수는 대문자로 하는게 좋다.(커뮤니티 암묵적 룰)
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER: {
            // state.winner = action.winner; 이렇게 하면 안된다. (불변성을 지키기 위함)
            return {
                ...state,
                winner: action.winner,
            };
        }
        case CLICK_CELL: {
            //useReducer에선 불변성을 지키기 위해 소스가 복잡해지는 단점이 있다.
            //immer라는 라이브러리로 가독성을 해결하는 방법이 있다.
            const tableData = [...state.tableData]; //얕은 복사
            tableData[action.row] = [...tableData[action.row]]; 
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData: tableData,
                recentCell: [action.row, action.cell], //선택칸으로 기억
            }
        }
        case CHANGE_TURN: {
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            };
        }
        case RESET_GAME: {
            return {
                ...state,
                turn: 'O',
                tableData: [
                    ['','',''], 
                    ['','',''], 
                    ['','','']
                ],
                recentCell: [-1, -1], //없는 칸으로 초기화
            };
        }
    }
}

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { tableData, winner, turn, recentCell } = state;
    // console.log('TicTacToe render');
    // console.log(initialState);

    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData, setTableData] = useState(['', '', ''],['', '', ''],['', '', '']);

    const onClickTable = useCallback(() => {
        dispatch({ type: SET_WINNER, winner: 'O' }); 
        dispatch({ type: RESET_GAME });
    },[],)

    useEffect(() => {
        const [row, cell] = recentCell;
        if (row < 0) {
            return;
        }
        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
            win = true;
        }
        if (win) { // 승리시
            dispatch({ type: SET_WINNER, winner: turn });
            dispatch({ type: RESET_GAME });
        } else {
            let all = true; // all이 true면 무승부라는 뜻
            tableData.forEach((row) => { //무승부검사
                row.forEach((cell) => {
                    if (!cell) {
                        all = false; // 하나라도 안찬 칸이 있으면 무승부가 아니다.
                    }
                })
            })
            if (all) {
                // 무승부
                alert('무승부! 재시작합니다.')
                dispatch({ type: RESET_GAME });
            } else {
                dispatch({ type: CHANGE_TURN });
            }
        }
    }, [recentCell])

    return (
        <>
            <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch}/>
            {winner && <div>{winner}님의 승리</div>}
        </>
    )
}

export default TicTacToe;