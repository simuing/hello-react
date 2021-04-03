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
};

//export 해서 다른 컴포넌트에서 사용할 수 있도록 한다.
export const TableContext = createContext({ 
    tableData: [],      //배열 모양만 맞춰준다.
    dispatch: () => {}, //함수 모양만 맞춰준다.
});

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
    halted: false
};

/**
 * @function plantMine 지뢰를 심는 함수
 * @param {*} row  가로 칸 수
 * @param {*} cell 세로 칸 수
 * @param {*} mine 지뢰 수
 */
const plantMine = (row, cell, mine) => {
    console.log(row, cell, mine);

    //10x10 테이블 데이터를 추출한다.
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });

    //지뢰를 심을 위치를 담는다.
    const shuffle = []; 
    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }

    //10x10을 돌고 2차원 배열 테이블이 만들어진다.
    const data = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(CODE.NORMAL);
        }
    }

    // 몇 콤마 몇인지를 계산하기 위한 코드
    for (let k = 0; k < shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }
    return data;
};

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';

export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME: {
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine),
                halted: false,
            }
        }
        case OPEN_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.OPENED;
            let around = [];

            //위쪽 칸 검사
            if(tableData[action.row - 1]) {
                around = around.concat(
                    tableData[action.row - 1][action.cell - 1],
                    tableData[action.row - 1][action.cell],
                    tableData[action.row - 1][action.cell + 1],
                )
            }
            //왼쪽, 오른쪽 칸 검사
            around = around.concat(
                tableData[action.row][action.cell - 1],
                tableData[action.row][action.cell + 1],
            )
            //아래쪽 칸 검사
            if(tableData[action.row + 1]) {
                around = around.concat(
                    tableData[action.row + 1][action.cell - 1],
                    tableData[action.row + 1][action.cell],
                    tableData[action.row + 1][action.cell + 1],
                )
            }
            // 지뢰 수 세기
            const count = around.filter((v) => [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)).length;
            console.log(count);
            tableData[action.row][action.cell] = count;
            return {
                ...state,
                tableData,
            }
        }
        case CLICK_MINE: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.CLICKED_MINE;
            return {
                ...state,
                tableData,
                halted: true,
            }
        }
        case FLAG_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.MINE) {
                tableData[action.row][action.cell] = CODE.FLAG_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.FLAG;
            }
            return {
                ...state,
                tableData,
            }
        }
        case QUESTION_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.FLAG_MINE) {
                tableData[action.row][action.cell] = CODE.QUESTION_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.QUESTION;
            }
            return {
                ...state,
                tableData,
            }
        }
        case NORMALIZE_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
                tableData[action.row][action.cell] = CODE.MINE;
            } else {
                tableData[action.row][action.cell] = CODE.NORMAL;
            }
            return {
                ...state,
                tableData,
            }
        }
        default:
            return state;
    }
};

const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, halted, timer, result } = state;

    // useMemo로 캐싱해주어 성능 최적화를 한다.
    // dispatch는 절대로 바뀌지 않기 때문에 바뀌는 목록엔 추가하지 않아도 된다.
    const value = useMemo(() => (
        { tableData: tableData, halted: halted, dispatch }
    ), [tableData, halted]);

    return (
        <TableContext.Provider value={value}>
            <Form/>
            <div>{timer}</div>
            <Table />
            <div>{result}</div>
        </TableContext.Provider>
    )
}

export default MineSearch;